"use strict";(self.webpackChunkmarkdown_website=self.webpackChunkmarkdown_website||[]).push([[7014],{8420:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"gisce/varis/useful_commands","title":"Comandes utils","description":"- Erp GTK","source":"@site/docs/gisce/varis/useful_commands.md","sourceDirName":"gisce/varis","slug":"/gisce/varis/useful_commands","permalink":"/docs/gisce/varis/useful_commands","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Crear comercialitzadora a distribuidora","permalink":"/docs/gisce/varis/Crear usuari FTP per la comer dintre de distri"},"next":{"title":"Manuals","permalink":"/docs/intro"}}');var s=n(4848),c=n(8453);const a={},t="Comandes utils",l={},o=[{value:"Erp GTK",id:"erp-gtk",level:2},{value:"Webclient",id:"webclient",level:2},{value:"PUDB",id:"pudb",level:2},{value:"Run Scripts",id:"run-scripts",level:2},{value:"Harakiri",id:"harakiri",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"comandes-utils",children:"Comandes utils"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#erp-gtk",children:"Erp GTK"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#webclient",children:"Webclient"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#pudb",children:"PUDB"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#run-scripts",children:"Run Scripts"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#harakiri",children:"Harakiri"})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"erp-gtk",children:"Erp GTK"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"emiquel=1 DEBUG_ENABLED=True python /home/erp/src/erp/server/bin/openerp-server.py --no-netrpc --price_accuracy=6 --config=/home/erp/conf/$conf_file$.conf --port 12000 --interface 0.0.0.0\n"})}),"\n",(0,s.jsx)(r.h2,{id:"webclient",children:"Webclient"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"emiquel=1 OPENERP_MSGPACK=1 OPENERP_MSGPACK_PORT=12001 OPENERP_MSGPACK_HOST=0.0.0.0 DEBUG_ENABLED=True python /home/erp/src/erp/server/bin/openerp-server.py --no-netrpc --price_accuracy=6 --config /home/erp/conf/$conf_file$.conf --port 12000 --interface 0.0.0.0\n"})}),"\n",(0,s.jsx)(r.h2,{id:"pudb",children:"PUDB"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import os\nif os.environ.get('emiquel'):\n    import pudb\n    pu.db\n"})}),"\n",(0,s.jsx)(r.h2,{id:"run-scripts",children:"Run Scripts"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"python /home/erp/src/erp/server/bin/openerp-server.py --no-netrpc --price_accuracy=6 --config=/home/erp/conf/$conf_file$.conf --port 12000 --interface 0.0.0.0 --run-scripts=$modul$ --run-scripts-interactive\n"})}),"\n",(0,s.jsx)(r.h2,{id:"harakiri",children:"Harakiri"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"oopgrade --config=/home/erp/conf/centelles-comer-erp.conf pubsub --channel all harakiri\n"})})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>t});var i=n(6540);const s={},c=i.createContext(s);function a(e){const r=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(c.Provider,{value:r},e.children)}}}]);