function a(n,r={}){const{preserveSettings:s=!0}=r,e=new URLSearchParams;s&&e.set("preserve_settings","true");const t=e.toString();return`eso-addon-manager://pack/${n}${t?`?${t}`:""}`}export{a as g};
