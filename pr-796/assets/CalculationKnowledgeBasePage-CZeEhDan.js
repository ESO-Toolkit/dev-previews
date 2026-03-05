import{u as i,j as e,K as l,B as a,T as n,t as c,L as r,bH as h,bb as d}from"./mui-uBGPQPbj.js";import{M as u,r as m}from"./index-D0FO7Dth.js";const g=`# Calculation Knowledge Base\r
\r
_Last Updated: 2025-10-28_  \r
_Audience: ESO Toolkit users who want to understand how the numbers are produced_\r
\r
This guide explains the logic behind every calculated insight that appears in ESO Toolkit. Instead of diving into code or data structures, we describe how the app reads your combat log, what each metric is trying to show, and the assumptions that shape the result.\r
\r
## How We Interpret Combat Logs\r
\r
- **We replay the fight timeline.** Your log is streamed into a shared analysis worker that re-simulates each second of the encounter. Whenever possible we keep the timeline continuous so charts and tables line up with in-game events.\r
- **We separate “always on” from “moment to moment”.** Stats granted by gear, champion points, or passives are treated as your baseline. Temporary buffs, debuffs, and mechanics are layered on top so you can see when something actually affected the fight.\r
- **We follow ESO’s combat rules.** Examples include the 18,200 penetration cap, the 125% critical damage ceiling, and the “combat ends after 10 seconds of inactivity” rule that powers active percentage.\r
- **We prefer readable outputs.** Each calculator feeds data into UI panels, timelines, or tables. The formats differ, but the logic below matches what you see on screen.\r
\r
## What Each Calculation Covers\r
\r
| Insight | What You See | How We Work It Out |\r
| --- | --- | --- |\r
| **Actor positions** | Replay camera and movement trails | Rebuild a 240 Hz timeline of positions, smoothing gaps under five seconds and freezing the last known spot for longer breaks. |\r
| **Buff timelines** | Buff and debuff uptime references | Pair “gain” and “lose” events for each effect, assume it lasts to fight end if no removal appears, and allow overlapping applications. |\r
| **Critical damage** | Critical damage timeline & source table | Start from the 50% base, add permanent bonuses, then sample each second to add temporary sources and clamp at 125%. |\r
| **Damage reduction** | Armor & mitigation panel | Sum armor from gear/passives with active buffs/debuffs, then convert armor totals into mitigation percentages (≈1% per 660 armor, max 50%). |\r
| **Penetration** | Penetration panel & source list | Add static penetration to active buffs and enemy debuffs every second, capping at 18 200 and tracking time spent capped. |\r
| **Damage over time** | DPS timelines per player/target | Bucket outgoing damage into one-second slices, totaling per player and target to emphasize spikes and troughs. |\r
| **Active percentage** | Combat uptime % | Stitch damage events into activity windows and close them after ten idle seconds per ESO’s combat rule. |\r
| **Status effects** | Concussion/Chill/Burning etc. uptime | Clip curated effect intervals to fight bounds and compare time active versus fight length per target. |\r
| **Elemental weakness stacks** | Flame/Frost/Shock stack chart | Track start/stop points for each weakness and count simultaneous effects to report stack-level uptime. |\r
| **Touch of Z’en stacks** | Z’en helper panel | For each Z’en interval, count unique DOT abilities from the applier within a rolling three-second window and treat each as one stack (up to five). |\r
| **Stagger stacks** | Stone Giant uptime tracker | Simulate stack build/refresh from Stone Giant hits, letting stacks decay after six seconds without a refresh. |\r
| **Travel distance** | Movement summaries | Sum straight-line hops between subsequent position samples while ignoring sub-5 cm jitter. |\r
| **Scribing detections** | Signature script summaries | Compare ability timing against known signature patterns across damage, buff, and resource events. |\r
\r
## Deep Dive: How Each Metric Is Calculated\r
\r
### Actor Positions\r
- **What it tells you:** Where every player or NPC was throughout the encounter, so replays feel like a live fight.\r
- **How we calculate it:**\r
	- Gather every position-bearing event and convert it into x/y coordinates.\r
	- Insert samples on a fixed ~240 Hz grid; if the log skipped that instant we reuse the most recent coordinates.\r
	- If no update arrives for five seconds, we hold the last location (players) or temporarily hide the actor (minor NPCs) until a new sample appears.\r
- **Things to know:** Taunt markers follow the latest active taunt, and bosses start at full health if the game reports it. Extremely long fights may be thinned slightly to stay responsive.\r
\r
### Buff & Debuff Timelines\r
- **What it tells you:** Exactly when an effect like Major Breach, Z’en, or a unique set bonus was active.\r
- **How we calculate it:**\r
	- Treat each apply event as the start of a timer and each remove event as its end.\r
	- If a remove never arrives, end the timer at the fight’s finish (or the last timestamp we have).\r
	- Allow multiple timers for the same effect so stacks or multi-target applications are captured.\r
- **Things to know:** Stack-based remove events don’t instantly end the effect; they simply reduce stacks. These timelines are the backbone for other calculators.\r
\r
### Critical Damage\r
- **What it tells you:** Your crit damage multiplier over time and which sources contributed (gear, passives, debuffs on the boss, etc.).\r
- **How we calculate it:**\r
	- Build a baseline once from combatant information (race, gear traits, passives, champion points).\r
	- Every second, evaluate which buffs/debuffs are active and add their crit damage bonuses on top of the baseline.\r
	- Clamp the total at 125% and log whether the cap was hit that second.\r
- **Things to know:** Some effects are hard to detect (e.g., Backstabber CP) so they appear as inactive until we have reliable detection logic.\r
\r
### Damage Reduction & Mitigation\r
- **What it tells you:** Your armor totals and the percentage of incoming damage you should be mitigating.\r
- **How we calculate it:**\r
	- Derive your starting armor from gear pieces, passives, and race.\r
	- Each second, add buffs that raise armor, subtract debuffs, and apply conditional modifiers (e.g., Bulwark when blocking).\r
	- Translate the total into mitigation using ESO’s conversion (armor ÷ 660 = mitigation %, capped at 50%).\r
- **Things to know:** Protection-style buffs stack separately in-game; we call them out when detected but focus on armor-derived mitigation for clarity.\r
\r
### Penetration\r
- **What it tells you:** How much armor you strip from enemies and when you reach the 18,200 cap.\r
- **How we calculate it:**\r
	- Establish a static penetration baseline (sets, traits, passives, weapon type).\r
	- For each second, tally self-buffs (e.g., Minor Breach procs) and enemy debuffs currently affecting your chosen target.\r
	- Sum baseline + bonuses, cap at 18 200, and record how often the cap was reached.\r
- **Things to know:** Some sources rely on assumptions from the log (Splintered Secrets assumes two stacks; Force of Nature needs curated debuffs). We highlight these assumptions in the UI.\r
\r
### Damage Over Time (DPS Timelines)\r
- **What it tells you:** Smoothed DPS curves for each player and target, great for spotting burn phases or lull periods.\r
- **How we calculate it:**\r
	- Choose a bucket size (1 000 ms by default).\r
	- Assign every outgoing damage event to the bucket covering its timestamp.\r
	- Sum damage per bucket for each player/target combination and compute averages and maxes for the view.\r
- **Things to know:** Players with no damage still show up with flat zero lines, so you can confirm they were inactive.\r
\r
### Active Percentage\r
- **What it tells you:** The share of the fight where a player was actively dealing damage.\r
- **How we calculate it:**\r
	- Filter to damage events you dealt to enemies within fight bounds.\r
	- Merge consecutive events into a window as long as each new hit occurs within 10 seconds of the previous one.\r
	- When a gap exceeds 10 seconds, close the window and start a new one on the next hit; sum window lengths and divide by total fight time.\r
- **Things to know:** Only damage events count today. If you were supporting with non-damage actions, the percentage may look low even though you were busy.\r
\r
### Status Effect Uptimes\r
- **What it tells you:** How consistently key status effects (Concussion, Burning, etc.) stayed on each target.\r
- **How we calculate it:**\r
	- Look up the start/end windows for each curated status effect on each target.\r
	- Clip the windows so they never extend outside the fight start/end.\r
	- Add up the clipped durations and divide by fight length to get percentages.\r
- **Monitored IDs:**\r
	- Buff-style statuses: Overcharged \`178118\`, Sundered \`178123\`, Concussion \`95134\`, Chill \`95136\`, Diseased \`178127\`.\r
	- Debuff-style statuses: Burning \`18084\`, Poisoned \`21929\`, Hemorrhaging \`148801\`.\r
- **Things to know:** We focus on curated effects that drive damage bonuses or mechanics. Others are ignored to keep the view uncluttered.\r
\r
### Elemental Weakness Stacks\r
- **What it tells you:** When Flame, Frost, and Shock weakness debuffs overlapped, giving you one, two, or three stacks.\r
- **How we calculate it:**\r
	- Convert each weakness interval into “start” and “end” markers.\r
	- Traverse the timeline in order, counting how many weaknesses are active per target.\r
	- Whenever the count changes, record how long the previous stack level lasted and attribute the time to that stack tier.\r
- **Monitored IDs:** Flame Weakness \`142610\`, Frost Weakness \`142652\`, Shock Weakness \`142653\`.\r
- **Things to know:** We highlight the maximum stacks observed on any single target at a time. Multiple targets each sitting at one stack won’t appear as “three”.\r
\r
### Touch of Z’en Stacks\r
- **What it tells you:** How many Z’en stacks you realistically maintained on the target.\r
- **How we calculate it:**\r
	- For each Z’en application, identify the most likely caster (the applier or someone dealing DOT damage within a five-second window).\r
	- Sample the fight every second; at each sample, count unique DOT abilities from that caster hitting the target within the past three seconds.\r
	- Map the count to stack numbers (min 0, max 5) and record the time spent at each stack level.\r
- **Monitored IDs:** Touch of Z’en debuff \`126597\`. Damage-over-time abilities are any hits flagged as \`tick = true\` in the log, so we automatically include the full DOT catalogue (e.g., Razor Caltrops \`20930\`, Barbed Trap \`117809\`, Wall of Elements morphs \`39011/26869/26879/40252\`, Endless Hail \`32714\`, Growing Swarm \`123082\`, Subterranean Assault \`143944\`, etc.). The UI exposes the exact ability IDs detected via the “DOTs contributing to stacks” list.\r
- **Things to know:** If the log can’t tie a DOT back to the applier, we may undercount stacks. Use the DOT list in the UI to audit coverage.\r
\r
### Stagger Stacks (Stone Giant)\r
- **What it tells you:** Coverage of the Stagger debuff provided by Stone Giant.\r
- **How we calculate it:**\r
	- Treat each Stone Giant hit as adding one stack up to a maximum of three and resetting a six-second expiration timer.\r
	- If no hit lands before the timer elapses, reduce the stack count by one per expiration.\r
	- Record how long the target spent at each stack count as the fight progresses.\r
- **Monitored IDs:** Stone Giant damage \`133027\` feeds the stacking model.\r
- **Things to know:** Hits exactly at the end of the fight aren’t treated as refreshes to avoid exaggerating coverage.\r
\r
### Player Travel Distance\r
- **What it tells you:** How far each player moved, useful for kiting assignments or positioning reviews.\r
- **How we calculate it:**\r
	- Sort position samples chronologically for each player.\r
	- Discard jumps under five centimeters to remove idle jitter.\r
	- Compute straight-line distance between remaining samples and accumulate totals, active movement duration, and average speed.\r
- **Things to know:** Only tracked players are included. If the log lacks coordinate data (rare), we skip entries to avoid misleading numbers.\r
\r
### Scribing Detections\r
- **What it tells you:** Whether signature scripts or automated rotations were detected during the fight.\r
- **How we calculate it:**\r
	- Parse the fight into per-player timelines of casts, buffs, resource spikes, and other events.\r
	- Compare those timelines against a library of known script signatures (sequence, timing, ability mix).\r
	- When a match exceeds the confidence threshold, log the detection with supporting evidence for review.\r
- **Things to know:** The system reviews all event types (damage, healing, buffs, and resource changes) because some signatures only surface in less obvious event streams.\r
\r
## When Numbers Might Look Off\r
- Missing fight bounds prevent several metrics from calculating; you’ll see empty panels in that case.\r
- If the log drops events (common on unstable connections), timelines can have brief gaps or lower-than-expected uptimes.\r
- Certain set bonuses or passives aren’t fully exposed in the log. When we rely on heuristics or assumptions, the UI labels them so you can double-check.\r
\r
## Want to Suggest Improvements?\r
- Let us know if a calculation feels inaccurate or confusing. Include the fight link so we can replay the exact scenario.\r
- Feature requests—like documenting additional mechanics or support metrics—can be shared in Discord or filed on GitHub.\r
`,p={"& h1":{fontSize:{xs:"1.875rem",md:"2.25rem"},fontWeight:700,mt:4,mb:2},"& h2":{fontSize:{xs:"1.5rem",md:"1.875rem"},fontWeight:600,mt:4,mb:1.5},"& h3":{fontSize:{xs:"1.25rem",md:"1.5rem"},fontWeight:600,mt:3,mb:1.25},"& h4":{fontSize:{xs:"1.1rem",md:"1.25rem"},fontWeight:600,mt:3,mb:1},"& p":{fontSize:"1rem",lineHeight:1.7,mb:2},"& ul, & ol":{pl:3,mb:2},"& li":{mb:.75},"& table":{width:"100%",borderCollapse:"collapse",mb:3,overflowX:"auto",display:"block"},"& thead":{backgroundColor:"action.hover"},"& th, & td":{border:t=>`1px solid ${t.palette.divider}`,padding:"8px 12px",textAlign:"left",verticalAlign:"top"},"& code":{fontFamily:"Consolas, Monaco, 'Fira Code', monospace",backgroundColor:"action.hover",borderRadius:1,px:.5,py:.25,fontSize:"0.95em"},"& pre":{backgroundColor:"action.hover",borderRadius:2,p:2,overflowX:"auto",mb:3},"& blockquote":{borderLeft:t=>`4px solid ${t.palette.primary.main}`,pl:2,ml:0,color:"text.secondary",fontStyle:"italic",backgroundColor:"action.hover",py:1,pr:2,borderRadius:1,mb:3},"& a":{color:"primary.main",fontWeight:600}},f={a:({href:t,children:o,...s})=>e.jsx(r,{...s,href:t,target:"_blank",rel:"noopener noreferrer",children:o})},y=()=>{const t=i();return e.jsxs(l,{maxWidth:"lg",sx:{py:{xs:4,md:6}},children:[e.jsxs(a,{display:"flex",flexDirection:"column",gap:2,mb:4,children:[e.jsx(n,{variant:"h3",component:"h1",fontWeight:800,gutterBottom:!0,children:"Calculation Knowledge Base"}),e.jsx(n,{variant:"subtitle1",color:"text.secondary",children:"Explore how ESO Toolkit derives combat analytics, where data comes from, and how we transform logs into actionable insights."}),e.jsxs(c,{icon:e.jsx(h,{fontSize:"small"}),severity:"info",sx:{borderLeft:`4px solid ${t.palette.primary.main}`,backgroundColor:t.palette.mode==="dark"?"rgba(59, 130, 246, 0.12)":"rgba(59, 130, 246, 0.08)"},children:["This content mirrors the internal documentation in"," ",e.jsx(r,{href:"https://github.com/ESO-Toolkit/eso-toolkit",target:"_blank",rel:"noopener noreferrer",children:"documentation/features/calculations/CALCULATION_KNOWLEDGE_BASE.md"}),". Updates to the source file are automatically reflected here at build time."]})]}),e.jsx(d,{sx:{mb:4}}),e.jsx(a,{sx:p,children:e.jsx(u,{remarkPlugins:[m],components:f,children:g})})]})};export{y as CalculationKnowledgeBasePage};
