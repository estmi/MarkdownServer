"use strict";(self.webpackChunkmarkdown_website=self.webpackChunkmarkdown_website||[]).push([[5915],{2391:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"gisce/lucera/quixotic/quixotic_config","title":"Quixotic Config","description":"","source":"@site/docs/gisce/lucera/quixotic/quixotic_config.md","sourceDirName":"gisce/lucera/quixotic","slug":"/gisce/lucera/quixotic/quixotic_config","permalink":"/en/docs/gisce/lucera/quixotic/quixotic_config","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Quixotic Lucera","permalink":"/en/docs/gisce/lucera/quixotic/"},"next":{"title":"Language Migration","permalink":"/en/docs/gisce/migrations/language_migration"}}');var r=i(4848),d=i(8453);const s={},n="Quixotic Config",o={},c=[];function l(e){const a={code:"code",h1:"h1",header:"header",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"quixotic-config",children:"Quixotic Config"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'{"_type":"export","__export_format":4,"__export_date":"2024-05-10T12:35:59.939Z","__export_source":"insomnia.desktop.app:v2022.4.1","resources":[{"_id":"req_cfe055daea7d4ec1a2107bc535bb2741","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1715344434862,"created":1655465978214,"url":"{{ _.base_url }}/pasomensajeria/carga/resultado/v1/","name":"Obtenci\xf3n de resultados de carga de XMLs","description":"Funci\xf3 no implementada en el ERP. En teoria diu si la distribuidora s\'ha baixat el fitxer xml que has pujat amb la crida \\"Subir XMLs para cargar en distribuidora\\"","method":"GET","body":{},"parameters":[{"id":"pair_f9752dbe4f71468889ebcb3f5dfac6ec","name":"datetimeFrom","value":"2024-04-03T00:00:00+2:00","description":""},{"id":"pair_ddbe07928ac14a529dc745992140f40a","name":"datetimeTo","value":"2023-04-03T12:00:00+2:00","description":""},{"id":"pair_96faaa74816441d0971c6e69b144fa96","name":"processCodes","value":"","description":"","disabled":false}],"headers":[{"id":"pair_c5fa05206cab4a1a999d47e0de84365a","name":"Authorization","value":"{{ _.api_key }}","description":""}],"authentication":{},"metaSortKey":-1655465978214,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"wrk_720604aa2f3241f291369835f4c122ca","parentId":null,"modified":1655382363348,"created":1655382363348,"name":"Quixotic 360","description":"","scope":"collection","_type":"workspace"},{"_id":"req_f6a4117ab8ab45de87b20ba65271dca4","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1715344446228,"created":1655464522882,"url":"{{ _.base_url }}/pasomensajeria/carga/v1/","name":"Subir XMLs para cargar en distribuidora","description":"Puja un fitxer xml a quixotic. Important, nom\xe9s utilitzar aquesta funcio desde el ERP no desde insomnia","method":"PUT","body":{"mimeType":"application/json","text":"{\\n\\t\\"xmls\\": [\\n\\t\\t{\\n\\t\\t\\t\\"name\\": \\"mifichero.xml\\",\\n\\t\\t\\t\\"xml\\": \\"<?xml version=\'1.0\' encoding=\'ISO-8859-1\' standalone=\'yes\'?><facturasctd</facturasctd>\\"\\n\\t\\t}\\n\\t]\\n}"},"parameters":[],"headers":[{"name":"Authorization","value":"{{ _.api_key }}","id":"pair_d0385627940543a295e152b8d17ecbb1"},{"name":"Content-Type","value":"application/json","id":"pair_65b03323024a44c780bbdf3ad641f93d"}],"authentication":{},"metaSortKey":-1655464522882,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_d30c0b2b420e469aae7d787cff6b51ce","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1715344531044,"created":1655382543686,"url":"{{ _.base_url }}/pasomensajeria/v1/","name":"[GENERIC]Obtenci\xf3n de XMLs descargados de distribuidora","description":"","method":"GET","body":{},"parameters":[{"name":"datetimeFrom","value":"2024-05-10T 10:00:00+2:00","id":"pair_7cd2c66d650f4f96974ec8152fec59ab"},{"name":"datetimeTo","value":"2024-05-10T 17:00:00+2:00","id":"pair_c2e228c6fc12474090a0572a733a1484"},{"id":"pair_03ac6963d4fd477ca8bcca07617b5c11","name":"page","value":"1","description":"","disabled":false},{"id":"pair_ac0a1321c8d649c785719dff0c9575f7","name":"paginationSize","value":"200","description":""}],"headers":[{"name":"Authorization","value":"{{ _.api_key }}","id":"pair_6edccc8dec0c4c59a4127f44d23bda47","disabled":false}],"authentication":{"type":"bearer","token":"","prefix":"","disabled":true},"metaSortKey":-1655382543686,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_25d7f7aeaf644914a3b2a648f1b3041c","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1715344530112,"created":1715342869525,"url":"{{ _.base_url }}/pasomensajeria/v1/","name":"[Electricitat F1]Obtenci\xf3n de XMLs descargados de distribuidora","description":"Cridem quixotic per obtenir els F1 entre 2 dates. En cas de timeout a l\'hora de aconseguir la resposta provem a disminuir el numero de resultats per pagina. Si tot i aix\xed no funciona provem a redu\xefr el rang de dates","method":"GET","body":{},"parameters":[{"name":"datetimeFrom","value":"2024-05-10T 10:00:00+2:00","id":"pair_7cd2c66d650f4f96974ec8152fec59ab"},{"name":"datetimeTo","value":"2024-05-10T 17:00:00+2:00","id":"pair_c2e228c6fc12474090a0572a733a1484"},{"id":"pair_03ac6963d4fd477ca8bcca07617b5c11","name":"page","value":"1","description":"","disabled":false},{"id":"pair_ac0a1321c8d649c785719dff0c9575f7","name":"paginationSize","value":"200","description":""},{"id":"pair_3c8890391de348e9b5a52320ebb960ef","name":"processCodes","value":"F1","description":"","disabled":false}],"headers":[{"name":"Authorization","value":"{{ _.api_key }}","id":"pair_6edccc8dec0c4c59a4127f44d23bda47","disabled":false}],"authentication":{"type":"bearer","token":"","prefix":"","disabled":true},"metaSortKey":-1654475350075,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_081b79023ba84ffebfb9992236cff34b","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1715344529147,"created":1715342888568,"url":"{{ _.base_url }}/pasomensajeria/v1/","name":"[Electricitat ATR]Obtenci\xf3n de XMLs descargados de distribuidora","description":"Cridem quixotic per obtenir els fitxers ATR d\'electricitat entre 2 dates. En cas de timeout a l\'hora de aconseguir la resposta provem a disminuir el numero de resultats per pagina. Si tot i aix\xed no funciona provem a redu\xefr el rang de dates","method":"GET","body":{},"parameters":[{"name":"datetimeFrom","value":"2024-05-10T 10:00:00+2:00","id":"pair_7cd2c66d650f4f96974ec8152fec59ab"},{"name":"datetimeTo","value":"2024-05-10T 17:00:00+2:00","id":"pair_c2e228c6fc12474090a0572a733a1484"},{"id":"pair_03ac6963d4fd477ca8bcca07617b5c11","name":"page","value":"1","description":"","disabled":false},{"id":"pair_ac0a1321c8d649c785719dff0c9575f7","name":"paginationSize","value":"200","description":""},{"id":"pair_0f41b8c253e74907a8b812811c961026","name":"processCodes","value":"C1, C2, A3, A1, B1, M1, E1, R1, T1, W1, D1, B2","description":"","disabled":false}],"headers":[{"name":"Authorization","value":"{{ _.api_key }}","id":"pair_6edccc8dec0c4c59a4127f44d23bda47","disabled":false}],"authentication":{"type":"bearer","token":"","prefix":"","disabled":true},"metaSortKey":-1654021753269.5,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_94f7e87a700145ad98ea19f292378143","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1715344528458,"created":1715343087227,"url":"{{ _.base_url }}/pasomensajeria/v1/","name":"[GAS ATR TOT] Obtenci\xf3n de XMLs descargados de distribuidora","description":"Cridem quixotic per obtenir els casos ATR de GAS entre 2 dates. \\n\\nLa resposta que ens tornara seran tots els casos ATR, inclosos els que el ERP no suporta a data de 08/04/2024\\n\\nEn cas de timeout a l\'hora de aconseguir la resposta provem a disminuir el numero de resultats per pagina. Si tot i aix\xed no funciona provem a redu\xefr el rang de dates","method":"GET","body":{},"parameters":[{"name":"datetimeFrom","value":"2024-05-10T 10:00:00+2:00","id":"pair_7cd2c66d650f4f96974ec8152fec59ab"},{"name":"datetimeTo","value":"2024-05-10T 17:00:00+2:00","id":"pair_c2e228c6fc12474090a0572a733a1484"},{"id":"pair_03ac6963d4fd477ca8bcca07617b5c11","name":"page","value":"1","description":"","disabled":false},{"id":"pair_ac0a1321c8d649c785719dff0c9575f7","name":"paginationSize","value":"200","description":""},{"id":"pair_dd10ba859df2486aa2af3ed25b73ea0f","name":"processCodes","value":"02, 03, 04, 05, 08, 09, 13, 19, 24, 26, 36, 38, 41, 44, 45, 46, 48, 49, 50, 61, 29, 42, 43","description":"","disabled":false}],"headers":[{"name":"Authorization","value":"{{ _.api_key }}","id":"pair_6edccc8dec0c4c59a4127f44d23bda47","disabled":false}],"authentication":{"type":"bearer","token":"","prefix":"","disabled":true},"metaSortKey":-1653794954866.75,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_2dfd15cba6604d73a3853a49b9be646b","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1715344527624,"created":1715342831624,"url":"{{ _.base_url }}/pasomensajeria/v1/","name":"[GAS ATR ERP] Obtenci\xf3n de XMLs descargados de distribuidora","description":"Cridem quixotic per obtenir els casos ATR de GAS entre 2 dates.\\n\\nLa resposta que ens tornara seran nom\xe9s els casos ATR que el ERP sap importar a data de 08/04/2024\\n\\nEn cas de timeout a l\'hora de aconseguir la resposta provem a disminuir el numero de resultats per pagina. Si tot i aix\xed no funciona provem a redu\xefr el rang de dates","method":"GET","body":{},"parameters":[{"name":"datetimeFrom","value":"2024-05-10T 10:00:00+2:00","id":"pair_7cd2c66d650f4f96974ec8152fec59ab"},{"name":"datetimeTo","value":"2024-05-10T 17:00:00+2:00","id":"pair_c2e228c6fc12474090a0572a733a1484"},{"id":"pair_03ac6963d4fd477ca8bcca07617b5c11","name":"page","value":"1","description":"","disabled":false},{"id":"pair_ac0a1321c8d649c785719dff0c9575f7","name":"paginationSize","value":"200","description":""},{"id":"pair_02db61110d814730868d9b840bd350b2","name":"processCodes","value":"02, 03, 04, 05, 24, 26, 38, 41, 44, 45, 46, 48, 49, 50, 42, 43","description":"","disabled":false}],"headers":[{"name":"Authorization","value":"{{ _.api_key }}","id":"pair_6edccc8dec0c4c59a4127f44d23bda47","disabled":false}],"authentication":{"type":"bearer","token":"","prefix":"","disabled":true},"metaSortKey":-1653568156464,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_f9ac3afaf0b3451aa702296b2f77b23f","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1715344526280,"created":1715342841963,"url":"{{ _.base_url }}/pasomensajeria/v1/","name":"[GAS B70] Obtenci\xf3n de XMLs descargados de distribuidora","description":"Cridem quixotic per obtenir els B70 (31, 32, 33) de GAS entre 2 dates.\\n\\nEn cas de timeout a l\'hora de aconseguir la resposta provem a disminuir el numero de resultats per pagina. Si tot i aix\xed no funciona provem a redu\xefr el rang de dates","method":"GET","body":{},"parameters":[{"name":"datetimeFrom","value":"2024-05-10T 10:00:00+2:00","id":"pair_7cd2c66d650f4f96974ec8152fec59ab"},{"name":"datetimeTo","value":"2024-05-10T 17:00:00+2:00","id":"pair_c2e228c6fc12474090a0572a733a1484"},{"id":"pair_03ac6963d4fd477ca8bcca07617b5c11","name":"page","value":"1","description":"","disabled":false},{"id":"pair_ac0a1321c8d649c785719dff0c9575f7","name":"paginationSize","value":"200","description":""},{"id":"pair_16f0ac30585443369d7613842c730ab9","name":"processCodes","value":"31,32,33","description":"","disabled":false}],"headers":[{"name":"Authorization","value":"{{ _.api_key }}","id":"pair_6edccc8dec0c4c59a4127f44d23bda47","disabled":false}],"authentication":{"type":"bearer","token":"","prefix":"","disabled":true},"metaSortKey":-1652660962853,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_fa3a30f5203b85eea7b2276166300402cb1dacbf","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1655382387701,"created":1655382363351,"name":"Base Environment","data":{},"dataPropertyOrder":{},"color":null,"isPrivate":false,"metaSortKey":1655382363351,"_type":"environment"},{"_id":"jar_fa3a30f5203b85eea7b2276166300402cb1dacbf","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1655382363352,"created":1655382363352,"name":"Default Jar","cookies":[],"_type":"cookie_jar"},{"_id":"spc_4271b0745d5248beba06d1e74cc9cf92","parentId":"wrk_720604aa2f3241f291369835f4c122ca","modified":1655382363349,"created":1655382363349,"fileName":"Quixotic 360","contents":"","contentType":"yaml","_type":"api_spec"},{"_id":"env_fe665b09846946d9a826a0f7e6c246ab","parentId":"env_fa3a30f5203b85eea7b2276166300402cb1dacbf","modified":1698401618287,"created":1655382393046,"name":"Main","data":{"base_url":"https://4xu1ypeohf.execute-api.eu-west-2.amazonaws.com/api","api_key":"Vt6OzfkDpkngKYxNP1uoUSk7v8w1xKHhRuwnHoQpp9A7St7mvYq6mQd8xeZDD0CwEFeh8ZSMqeTXrmOHCBye7dWoBDhSPOeguFHkJnGQaSk657rhmHnd95AVmCzRKSHw0YNkvpGyN8KK8BFnxw8ZEDVg3pCT2jYya5OT5CCCJ5ZgjPjScJya770UxOXnx9Qre6K1oFTHjRqVHdYkduxxBJg1YcO2V9hz5mPkwUgV9gOz488h5NrzkSPP7FDvCT6"},"dataPropertyOrder":{"&":["base_url","api_key"]},"color":"#1b00a3","isPrivate":false,"metaSortKey":1655382393046,"_type":"environment"}]}\n'})})]})}function u(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,a,i)=>{i.d(a,{R:()=>s,x:()=>n});var t=i(6540);const r={},d=t.createContext(r);function s(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);