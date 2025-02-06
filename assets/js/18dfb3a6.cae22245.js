"use strict";(self.webpackChunkmarkdown_website=self.webpackChunkmarkdown_website||[]).push([[7110],{6233:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>t,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"gisce/procediments/import_sips","title":"Importar SIPS (SIPS_Importer)","description":"Descarregar SIPS","source":"@site/docs/gisce/procediments/import_sips.md","sourceDirName":"gisce/procediments","slug":"/gisce/procediments/import_sips","permalink":"/docs/gisce/procediments/import_sips","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"FIX Multi","permalink":"/docs/gisce/procediments/fix_multi"},"next":{"title":"Importar SIPS","permalink":"/docs/gisce/procediments/import_sips_old"}}');var i=r(4848),o=r(8453);const a={},p="Importar SIPS (SIPS_Importer)",t={},c=[{value:"Descarregar SIPS",id:"descarregar-sips",level:2},{value:"Preparant la importacio",id:"preparant-la-importacio",level:2},{value:"Eliminar consums de sips previs",id:"eliminar-consums-de-sips-previs",level:3},{value:"Enviar els sips al servidor",id:"enviar-els-sips-al-servidor",level:3},{value:"Executarem un script per poder descomprimir els zips",id:"executarem-un-script-per-poder-descomprimir-els-zips",level:3}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"importar-sips-sips_importer",children:"Importar SIPS (SIPS_Importer)"})}),"\n",(0,i.jsx)(s.h2,{id:"descarregar-sips",children:"Descarregar SIPS"}),"\n",(0,i.jsx)(s.p,{children:"El client ens envia els zips amb tots els SIPS, els descarregarem i guardarem dins d'una carpeta."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/gisce/procediments/import_sips/image.png",alt:"zips_en_carpeta"})}),"\n",(0,i.jsx)(s.p,{children:"Seran un total de 8 arxius, 4 de PS i 4 de CONSUMOS i son els seguents: ELECTRICIDAD_baleares, ELECTRICIDAD_canarias, ELECTRICIDAD_peninsular i GAS_nacional."}),"\n",(0,i.jsx)(s.h2,{id:"preparant-la-importacio",children:"Preparant la importacio"}),"\n",(0,i.jsx)(s.h3,{id:"eliminar-consums-de-sips-previs",children:"Eliminar consums de sips previs"}),"\n",(0,i.jsx)(s.p,{children:"Entrarem al servidor on hem de carregar els SIPS i anirem al mongo, on eliminarem totes les dades de consums, ja que son innecessaries perque s'importen tots els consums:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ShellSession",children:'localhost:~$ ssh gisce@{server-client-erp}\ngisce@{server-client-erp}:~$ ssh {server-client-mongo}\ngisce@{server-client-mongo}:~$ mongo\nMongoDB shell version v3.6.8\nconnecting to: mongodb://127.0.0.1:27017\nWARNING: No implicit session: Logical Sessions are only supported on server versions 3.6 and greater.\nImplicit session: dummy session\nMongoDB server version: 3.2.22\nWARNING: shell and server versions do not match\nreplicaops:PRIMARY> show dbs\ndb1      2.030GB\ndb2    324.000GB\ndb3     60.002GB\ndb4    180.000GB\nreplicaops:PRIMARY> use {mongo-db}\nswitched to db {mongo-db}\nreplicaops:PRIMARY> db.cnmc_sips_consums.count()\n99999\nreplicaops:PRIMARY> db.cnmc_sips_consums.deleteMany({})\n{ "acknowledged" : true, "deletedCount" : 99999 }\nreplicaops:PRIMARY> db.cnmc_sips_consums_gas.count()\n99999\nreplicaops:PRIMARY> db.cnmc_sips_consums_gas.deleteMany({})\n{ "acknowledged" : true, "deletedCount" : 99999 }\n'})}),"\n",(0,i.jsx)(s.h3,{id:"enviar-els-sips-al-servidor",children:"Enviar els sips al servidor"}),"\n",(0,i.jsxs)(s.p,{children:["Utilitzarem la comanda ",(0,i.jsx)(s.code,{children:"scp"})," per poder enviar tots els zips al servidor:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ShellSession",children:"localhost:~$ scp *.zip {server}:/home/gisce/sips\n202411_SIPS2_CONSUMOS_ELECTRICIDAD_baleares.zip                                                             100%  509MB  59.1MB/s   00:08    \n202411_SIPS2_CONSUMOS_ELECTRICIDAD_canarias.zip                                                             100%  831MB  60.1MB/s   00:13\n202411_SIPS2_CONSUMOS_ELECTRICIDAD_peninsular.zip                                                           100%   18GB  59.4MB/s   05:12    \n202411_SIPS2_CONSUMOS_GAS_nacional.zip                                                                      100% 1191MB  60.5MB/s   00:19    \n202411_SIPS2_PS_ELECTRICIDAD_baleares.zip                                                                   100%   31MB  58.4MB/s   00:00    \n202411_SIPS2_PS_ELECTRICIDAD_canarias.zip                                                                   100%   48MB  59.4MB/s   00:00    \n202411_SIPS2_PS_ELECTRICIDAD_peninsular.zip                                                                 100%  934MB  60.4MB/s   00:15    \n202411_SIPS2_PS_GAS_nacional.zip                                                                            100%  438MB  59.5MB/s   00:07    \n"})}),"\n",(0,i.jsxs)(s.p,{children:["Mourem els zips de l'usuari gisce a la carpeta ",(0,i.jsx)(s.code,{children:"/home/erp/var/import_sips"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ShellSession",children:"gisce@{server-client-erp}:~/sips$ sudo mv * /home/erp/var/import_sips\ngisce@{server-client-erp}:~/sips$ sudo chown erp:erp /home/erp/var/import_sips/*\n"})}),"\n",(0,i.jsx)(s.h3,{id:"executarem-un-script-per-poder-descomprimir-els-zips",children:"Executarem un script per poder descomprimir els zips"}),"\n",(0,i.jsxs)(s.p,{children:["Executarem el seguent script desde la carpeta ",(0,i.jsx)(s.code,{children:"/home/erp/var/import_sips"})," que ens descomprimira els zips i encuara la carrega de sips. Quan creem l'script de python, molt important s'ha de configurar les variables URL,DB,USER,PWD."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"#! /bin/bash\n\nmkdir 'splitted'\nmkdir 'splitted/done'\n\nfor file in *.zip\ndo\n        filename=$(echo $file | rev | cut -f 2- -d '.' | rev)\n        echo \"${filename}\"\n        zcat $file | split --additional-suffix=.csv -l 1000000 - \"splitted/${filename}_splitted\"\ndone\n\npython queue_sips.py\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"queue_sips.py"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"# -*- encoding: utf-8 -*-\nfrom erppeek import Client\nfrom os import environ\n\nfrom pathlib import Path\n\nserver = # url erp\ndb = # nom database\nuser = # usuari a utilitzar\npassword = # password\nfolder_path = str(Path().resolve())+'/splitted'\n\nif not server or not db or not user or not password or not folder_path:\n   raise Exception('Falta alguna variable, URL o DB o USER o PASSWORD o PATH')\n\nc = Client(server, db, user=user, password=password)\n\nc.GiscedataCnmcComerSipsImporter.process_dir(folder_path)\n"})})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>p});var n=r(6540);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function p(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);