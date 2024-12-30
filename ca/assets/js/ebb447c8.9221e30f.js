"use strict";(self.webpackChunkmarkdown_website=self.webpackChunkmarkdown_website||[]).push([[2726],{9655:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"gisce/orm/fields","title":"Fields ORM","description":"Simple","source":"@site/docs/gisce/orm/fields.md","sourceDirName":"gisce/orm","slug":"/gisce/orm/fields","permalink":"/ca/docs/gisce/orm/fields","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Utilitzacio basica de ORM","permalink":"/ca/docs/gisce/orm/"},"next":{"title":"Export Language","permalink":"/ca/docs/gisce/procediments/export_language"}}');var a=i(4848),r=i(8453);const c={},t="Fields ORM",l={},o=[{value:"Simple",id:"simple",level:2},{value:"Complex",id:"complex",level:2},{value:"Many2Many",id:"many2many",level:3},{value:"Crear Objecte secundari i vincular",id:"crear-objecte-secundari-i-vincular",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"fields-orm",children:"Fields ORM"})}),"\n",(0,a.jsx)(n.h2,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(n.h2,{id:"complex",children:"Complex"}),"\n",(0,a.jsx)(n.h3,{id:"many2many",children:"Many2Many"}),"\n",(0,a.jsx)(n.p,{children:"Quan fem un write de un many2many s'utilitza una nomenclatura especial:"}),"\n",(0,a.jsx)(n.h4,{id:"crear-objecte-secundari-i-vincular",children:"Crear Objecte secundari i vincular"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"polissa_obj = c.model('giscedata.polissa')\n\nvals = {\n    'field': [(`accio a seguir`, )]\n}\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Values: (0, 0,  { fields })    create\n#         (1, ID, { fields })    modification\n#         (2, ID)                remove\n#         (3, ID)                unlink\n#         (4, ID)                link\n#         (5, ID)                unlink all\n#         (6, ?, ids)            set a list of links\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var s=i(6540);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);