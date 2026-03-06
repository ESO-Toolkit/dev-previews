import{u as s,j as e,K as i,B as t,T as r,t as l,bH as d,bb as c,L as m}from"./mui-uBGPQPbj.js";import{M as h,r as p}from"./index-D0FO7Dth.js";const u=`# Food Selector Knowledge Base\r
\r
**Last Updated**: November 14, 2025  \r
**Focus**: Generated consumable catalog that powers the Loadout Manager food selector\r
\r
---\r
\r
## Consumable Catalog Overview\r
\r
- **Source**: We curate server-side snapshots of the provisioning data published by UESP to keep the list comprehensive and lore-accurate.\r
- **Refresh cadence**: The catalog is reviewed alongside game updates and large balance passes. If you notice a missing entry, use the “Request Data Refresh” action to flag it for the tooling squad.\r
- **Data quality**: Each consumable includes its category, item quality, and the originating recipe identifier to help you confirm you are applying the intended buff.\r
\r
---\r
\r
## Selector Behaviour\r
\r
- **Search index**: Type a few letters to reveal matches by name or category (for example, \`tea\` surfaces every drink tagged as a tea).\r
- **Metadata chips**: Results highlight the consumable type, category, item quality tier, and recipe reference so you can double-check bonuses before equipping them.\r
- **Imported loadouts**: Wizard's Wardrobe imports that reference an unknown item appear as a temporary placeholder so you can still view or clear the buff. Once the catalog is refreshed with that item, the selector upgrades the placeholder automatically.\r
- **Clearing selections**: Use the clear icon inside the selector to remove a consumable. Your loadout export immediately reflects the change.\r
`,g={"& h1":{fontSize:{xs:"1.875rem",md:"2.25rem"},fontWeight:700,mt:4,mb:2},"& h2":{fontSize:{xs:"1.5rem",md:"1.875rem"},fontWeight:600,mt:4,mb:1.5},"& h3":{fontSize:{xs:"1.25rem",md:"1.5rem"},fontWeight:600,mt:3,mb:1.25},"& h4":{fontSize:{xs:"1.1rem",md:"1.25rem"},fontWeight:600,mt:3,mb:1},"& p":{fontSize:"1rem",lineHeight:1.7,mb:2},"& ul, & ol":{pl:3,mb:2},"& li":{mb:.75},"& table":{width:"100%",borderCollapse:"collapse",mb:3,overflowX:"auto",display:"block"},"& thead":{backgroundColor:"action.hover"},"& th, & td":{border:o=>`1px solid ${o.palette.divider}`,padding:"8px 12px",textAlign:"left",verticalAlign:"top"},"& code":{fontFamily:"Consolas, Monaco, 'Fira Code', monospace",backgroundColor:"action.hover",borderRadius:1,px:.5,py:.25,fontSize:"0.95em"},"& pre":{backgroundColor:"action.hover",borderRadius:2,p:2,overflowX:"auto",mb:3},"& blockquote":{borderLeft:o=>`4px solid ${o.palette.primary.main}`,pl:2,ml:0,color:"text.secondary",fontStyle:"italic",backgroundColor:"action.hover",py:1,pr:2,borderRadius:1,mb:3},"& a":{color:"primary.main",fontWeight:600}},f={a:({href:o,children:a,...n})=>e.jsx(m,{...n,href:o,target:"_blank",rel:"noopener noreferrer",children:a})},y=()=>{const o=s();return e.jsxs(i,{maxWidth:"lg",sx:{py:{xs:4,md:6}},children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:2,mb:4,children:[e.jsx(r,{variant:"h3",component:"h1",fontWeight:800,gutterBottom:!0,children:"Food Selector Knowledge Base"}),e.jsx(r,{variant:"subtitle1",color:"text.secondary",children:"Understand how the generated consumable catalog powers the Loadout Manager and learn the regeneration workflow, data provenance, and troubleshooting steps."}),e.jsx(l,{icon:e.jsx(d,{fontSize:"small"}),severity:"info",sx:{borderLeft:`4px solid ${o.palette.success.main}`,backgroundColor:o.palette.mode==="dark"?"rgba(76, 175, 80, 0.12)":"rgba(76, 175, 80, 0.08)"},children:"We refresh the consumable catalog regularly. If something looks out of date, run the regeneration workflow or reach out to the tooling squad for a data update."})]}),e.jsx(c,{sx:{mb:4}}),e.jsx(t,{sx:g,children:e.jsx(h,{remarkPlugins:[p],components:f,children:u})})]})};export{y as FoodSelectorKnowledgeBasePage};
