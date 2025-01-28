"use strict";(self.webpackChunkmarkdown_website=self.webpackChunkmarkdown_website||[]).push([[6712],{1263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"gisce/ipython/restapiclient","title":"RestApiClient","description":"- Install","source":"@site/docs/gisce/ipython/restapiclient.md","sourceDirName":"gisce/ipython","slug":"/gisce/ipython/restapiclient","permalink":"/docs/gisce/ipython/restapiclient","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ErpPeek","permalink":"/docs/gisce/ipython/erppeek"},"next":{"title":"Quixotic Lucera","permalink":"/docs/gisce/lucera/quixotic/"}}');var s=t(4848),r=t(8453);const c={},l="RestApiClient",a={},o=[{value:"Install",id:"install",level:2},{value:"Import",id:"import",level:2},{value:"Create Connection",id:"create-connection",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"restapiclient",children:"RestApiClient"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#install",children:"Install"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-connection",children:"Create Connection"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"pip install pygisceclient\n"})}),"\n",(0,s.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from gisce import RestApiClient as Client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"create-connection",children:"Create Connection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"url = 'https://powerp-api.energiacolectiva.pro'\nuser = '***user***'\npassword = '***pwd***'\nc = Client(url, user=user, password=password)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Es pot utilitzar igual que un ",(0,s.jsx)(n.a,{href:"/docs/gisce/ipython/erppeek",children:"erppeek"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Crida a API Lucera\nc.LuceraApiElectricityContracts.terminate_service_on_contract(549936,'SVE','2024/05/25')\n\n# Obtenir els ids de totes les polisses\npol_obj = c.model('giscedata.polissa')\nids = pol_obj.search([])\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);