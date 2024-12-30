"use strict";(self.webpackChunkmarkdown_website=self.webpackChunkmarkdown_website||[]).push([[662],{1478:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"gisce/procediments/refactor_user_root_to_gisce","title":"Eliminar usuari Root","description":"Reanomenar usuari Root","source":"@site/docs/gisce/procediments/refactor_user_root_to_gisce.md","sourceDirName":"gisce/procediments","slug":"/gisce/procediments/refactor_user_root_to_gisce","permalink":"/es/docs/gisce/procediments/refactor_user_root_to_gisce","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Procedimiento de contratacion","permalink":"/es/docs/gisce/procediments/new_contract_procedure.es"},"next":{"title":"Revisar Dades Mako","permalink":"/es/docs/gisce/procediments/revisar_dades_mako"}}');var n=s(4848),a=s(8453);const t={},c="Eliminar usuari Root",d={},l=[{value:"Reanomenar usuari Root",id:"reanomenar-usuari-root",level:2},{value:"Crear Usuari nou &#39;Si fa falta&#39;",id:"crear-usuari-nou-si-fa-falta",level:2},{value:"Moure els shortcuts d&#39;usuari",id:"moure-els-shortcuts-dusuari",level:2},{value:"Moure els permisos i grups d&#39;usuari",id:"moure-els-permisos-i-grups-dusuari",level:2},{value:"Creacio usuari processos",id:"creacio-usuari-processos",level:2},{value:"Modificar els crons",id:"modificar-els-crons",level:2},{value:"Configurar Openstg i Import tm",id:"configurar-openstg-i-import-tm",level:2},{value:"OpenSTG",id:"openstg",level:3},{value:"Configurar Telemesura (import_tm)",id:"configurar-telemesura-import_tm",level:3},{value:"Configurar usuari GIS",id:"configurar-usuari-gis",level:2},{value:"Actualitzar System Controller",id:"actualitzar-system-controller",level:2},{value:"Revisar que tot funciona",id:"revisar-que-tot-funciona",level:2}];function o(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"eliminar-usuari-root",children:"Eliminar usuari Root"})}),"\n",(0,n.jsx)(r.h2,{id:"reanomenar-usuari-root",children:"Reanomenar usuari Root"}),"\n",(0,n.jsxs)(r.p,{children:["Canviem el login de l'usuari ",(0,n.jsx)(r.code,{children:"root"})," per ",(0,n.jsx)(r.code,{children:"gisce"})," i la seva pertinent contrassenya."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"BEGIN; UPDATE res_users SET login = 'gisce', password = '[###]', name = 'Gisce' WHERE id = 1;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"crear-usuari-nou-si-fa-falta",children:"Crear Usuari nou 'Si fa falta'"}),"\n",(0,n.jsx)(r.p,{children:"Crear un usuari perque la persona dintre de l'empresa pugui utilitzar en comptes de root."}),"\n",(0,n.jsx)(r.p,{children:"Revisar podria ser que ja existis."}),"\n",(0,n.jsx)(r.h2,{id:"moure-els-shortcuts-dusuari",children:"Moure els shortcuts d'usuari"}),"\n",(0,n.jsxs)(r.p,{children:["Agafar els shortcuts (accions trobades a l'estrella) i moure-ls de usuari de ",(0,n.jsx)(r.code,{children:"root"})," cap a l'usuari nou."]}),"\n",(0,n.jsxs)(r.p,{children:["Per a aixo utilitzarem la seguent ",(0,n.jsx)(r.code,{children:"sql"})," que directament mou els shortcuts de ",(0,n.jsx)(r.code,{children:"root"})," al nou usuari."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"BEGIN; UPDATE ir_ui_view_sc SET user_id = [id_usuari] WHERE user_id = 1;\n"})}),"\n",(0,n.jsx)(r.p,{children:"En cas d'errors per duplicitat utilitzar la seg\xfcent query, que nomes mou els que no son comuns:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"BEGIN; UPDATE ir_ui_view_sc SET user_id = [id_usuari] WHERE user_id = 1 and id in (select\nm.id \nfrom ir_ui_view_sc m \nleft join ir_ui_view_sc c on c.action_id = m.action_id and c.res_id = m.res_id and c.action_type = m.action_type and c.view_id = m.view_id and c.user_id = [id_usuari] and m.user_id = 1 \nwhere m.user_id = 1 and c.user_id is null);\n"})}),"\n",(0,n.jsx)(r.h2,{id:"moure-els-permisos-i-grups-dusuari",children:"Moure els permisos i grups d'usuari"}),"\n",(0,n.jsxs)(r.p,{children:["Al nou usuari per a que no perdi res, li assignarem tots els permisos de GISCE per a que pugui contrinuar treballant a mode ",(0,n.jsx)(r.code,{children:"superuser"})," pero sense utiliutzar l'usuari ",(0,n.jsx)(r.code,{children:"root"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"creacio-usuari-processos",children:"Creacio usuari processos"}),"\n",(0,n.jsxs)(r.p,{children:["Crearem l'usuari processos i amb la comanda ",(0,n.jsx)(r.code,{children:"pwgen"})," crearem una pwd per l'user. Li assignarem el grup `` el qual li donara els permisos necessaris per executar tots els crons."]}),"\n",(0,n.jsx)(r.p,{children:"Assignar grups:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"User Groups"})})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Crontab \\ Cron Executor"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Account Invoice / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Base extended / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"BASE Index/ Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Contractacio/Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"CRM / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Custom Search / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Elasticsearch Client"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Employee"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA cts / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA CUPS / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA facturaci\xf3/ Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA Lectures / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GEISCEDATA lectures telegesti\xf3 / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA measures / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Giscedata Moxa / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA perfils / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA Polissa / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA profiles / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA PUNT FRONTERA / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA Qualitat (Escriptura)"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA RECORE / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA telemesires base / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEDATA Tensions / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"GISCEGIS BASE v3 / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"OORQ / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Partner Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Poweremail / External_users"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Poweremail / Internal_users"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Product / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Project / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Stock / Worker"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Switching / User"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Telegestio / Manager"})}),(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"Telegestio / User"})})]})]}),"\n",(0,n.jsx)(r.h2,{id:"modificar-els-crons",children:"Modificar els crons"}),"\n",(0,n.jsxs)(r.p,{children:["A l'usuari erp ",(0,n.jsx)(r.code,{children:"crontab -e"})," i canviar totes les mencions de l'usuari root i la seva contrasenya per el nou usuari processos i la nova contrasennya pertinent."]}),"\n",(0,n.jsxs)(r.p,{children:["Es pot revisar els crons d'altres usuaris vistant la carpeta: ",(0,n.jsx)(r.code,{children:"/var/spool/cron/crontabs"})]}),"\n",(0,n.jsx)(r.h2,{id:"configurar-openstg-i-import-tm",children:"Configurar Openstg i Import tm"}),"\n",(0,n.jsx)(r.h3,{id:"openstg",children:"OpenSTG"}),"\n",(0,n.jsxs)(r.p,{children:["Entrarem al servidor on estigui instalat, tot sovint a una raspberry-pi i entrarem a l'usuari ",(0,n.jsx)(r.code,{children:"stg"}),". Visitarem l'arxiu ",(0,n.jsx)(r.code,{children:"~/conf/stg_uwsgi_saltoscabrera.ini"})," i canviarem l'usuari i la pwd."]}),"\n",(0,n.jsx)(r.p,{children:"despres reiniciarem el servei desde el supervisor."}),"\n",(0,n.jsx)(r.h3,{id:"configurar-telemesura-import_tm",children:"Configurar Telemesura (import_tm)"}),"\n",(0,n.jsxs)(r.p,{children:["Sempre esta al ",(0,n.jsx)(r.code,{children:"crontab"})," de l'usuari ",(0,n.jsx)(r.code,{children:"erp"})," de la raspberry i/o del servidor. Canviar de root a gisce"]}),"\n",(0,n.jsx)(r.h2,{id:"configurar-usuari-gis",children:"Configurar usuari GIS"}),"\n",(0,n.jsxs)(r.p,{children:["Entrar a usuari gis carpeta ",(0,n.jsx)(r.code,{children:"~/etc/uwsgi/webgis.ini"})," i canviar usuari i pwd de root a gisce"]}),"\n",(0,n.jsxs)(r.p,{children:["reiniciar serveis de webgis/websearch/tms amb el ",(0,n.jsx)(r.code,{children:"supervisorctl"})]}),"\n",(0,n.jsx)(r.h2,{id:"actualitzar-system-controller",children:"Actualitzar System Controller"}),"\n",(0,n.jsx)(r.p,{children:"Entrar a l'ERP-TI i actualitzar les credencials del servidor."}),"\n",(0,n.jsx)(r.h2,{id:"revisar-que-tot-funciona",children:"Revisar que tot funciona"})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>c});var i=s(6540);const n={},a=i.createContext(n);function t(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);