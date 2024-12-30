"use strict";(self.webpackChunkmarkdown_website=self.webpackChunkmarkdown_website||[]).push([[355],{5698:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"gisce/migrations/language_migration","title":"Language Migration","description":"Crear Migracio","source":"@site/docs/gisce/migrations/language_migration.md","sourceDirName":"gisce/migrations","slug":"/gisce/migrations/language_migration","permalink":"/es/docs/gisce/migrations/language_migration","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Quixotic Config","permalink":"/es/docs/gisce/lucera/quixotic/quixotic_config"},"next":{"title":"Com fer una migracio","permalink":"/es/docs/gisce/migrations/migration"}}');var a=r(4848),o=r(8453);const l={},d="Language Migration",s={},t=[{value:"Crear Migracio",id:"crear-migracio",level:2},{value:"Models amb columns i constraints modificats",id:"models-amb-columns-i-constraints-modificats",level:2},{value:"Camps simples dintre de XMLs",id:"camps-simples-dintre-de-xmls",level:2},{value:"Carregar forms i trees",id:"carregar-forms-i-trees",level:2},{value:"Obtenir pool",id:"obtenir-pool",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"language-migration",children:"Language Migration"})}),"\n",(0,a.jsx)(n.h2,{id:"crear-migracio",children:"Crear Migracio"}),"\n",(0,a.jsx)(n.p,{children:"Per fer la migracio, hi ha varies parts, pero la primera sempre es igual:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# -*- coding: utf-8 -*-\nimport logging\n\n\ndef up(cursor, installed_version):\n    if not installed_version:\n        return\n\n    logger = logging.getLogger('openerp.migration')\n    uid = 1\n    module_name = 'giscedata_crm_leads'\n\n\ndef down(cursor, installed_version):\n    pass\n\n\nmigrate = up\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"models-amb-columns-i-constraints-modificats",children:"Models amb columns i constraints modificats"}),"\n",(0,a.jsxs)(n.p,{children:["En cas de canviar coses dels columns o constraints, necessitarem fer un ",(0,a.jsx)(n.code,{children:"_auto_init"}),".\nPer a fer un ",(0,a.jsx)(n.code,{children:"_auto_init"})," utilitzarem aquest patro:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"#obtenir-pool",children:"Primer obtindrem el pool"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Dintre de ",(0,a.jsx)(n.code,{children:"def up(cursor, installed_version):"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"    # Aqui definirem els models modificats que necessiten l'_auto_init\n    models_to_auto_init =[\n        'giscedata.crm.lead',\n    ]\n    for model in models_to_auto_init:\n        pool.get(model)._auto_init(cursor, context={'module': module_name})\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"camps-simples-dintre-de-xmls",children:"Camps simples dintre de XMLs"}),"\n",(0,a.jsxs)(n.p,{children:["Primer farem una llista de diccionaris que contindran la ",(0,a.jsx)(n.code,{children:"id"})," establerta a l'xml, un ",(0,a.jsx)(n.code,{children:"old_val"})," que contindra el valor actual a l'xml, un ",(0,a.jsx)(n.code,{children:"new_val"})," que sera el valor que li assignarem a partir d'ara i el ",(0,a.jsx)(n.code,{children:"field"})," que ens indica quin field s'esta modificant (majoritariament el ",(0,a.jsx)(n.code,{children:"name"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"    records = [\n        {'id': 'crm_case_section_crm_leads', 'old_val': 'Ofertes/Oportunitats', 'new_val': 'Ofertas/Oportunidades', 'field': 'name'},\n        {'id': 'validar_potencia_contractada_alta_polissa_desde_c1_lead', 'old_val': 'Validar potencia contractada al crear una polissa desde un lead de tipus C1', 'new_val': 'Validar potencia contratada al crear una p\xf3liza desde un lead de tipo C1', 'field': 'description'},\n    ]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Un cop tenim el diccionari, utilitzarem aquest codi, per a carregar-ho a la BD:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#obtenir-pool",children:"Obtenir pool"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"    imd_obj = pool.get('ir.model.data')\n    done_records = []\n    for record in records:\n        try:\n            xml_id = record['id']\n\n            model, table_id = imd_obj.get_object_reference(cursor, uid, module_name, xml_id)\n\n            model_obj = pool.get(model)\n            old_vals = model_obj.read(cursor, uid, table_id, [record['field']])\n\n            if old_vals:\n                if old_vals[record['field']] == record['old_val']:\n                    logger.info(\n                        '[post-0001_unify_lang_to_base_lang] Updating {field} on {model} '\n                        'where id = {id} xml_id = {xml_id}: \"{old_val}\" -> \"{new_val}\"'\n                        .format(\n                            field=record['field'],\n                            model=model,\n                            old_val=record['old_val'],\n                            new_val=record['new_val'],\n                            id=table_id,\n                            xml_id=xml_id))\n                    model_obj.write(cursor, uid, table_id, {record['field']: record['new_val']})\n                    done_records.append(xml_id)\n        except:\n            pass\n    if len(records) != len(done_records):\n        logger.error(\"Hi ha ids que no s'han actualitzat\")\n        for record in records:\n            if record['id'] not in done_records:\n                logger.error(record['id'])\n"})}),"\n",(0,a.jsx)(n.p,{children:"Aquest metode el que fara sera carregar les modificacions, nomes en el cas que a la BD hi hagi el valor antic. En cas de no trobar-lo, l'apunta i l'informa al final via consola."}),"\n",(0,a.jsx)(n.h2,{id:"carregar-forms-i-trees",children:"Carregar forms i trees"}),"\n",(0,a.jsxs)(n.p,{children:["Per a carregar els forms, utilitzarem el seguent metode, que simplement fa un ",(0,a.jsx)(n.code,{children:"load_data_records"})," de tots els ids informats. Per informar-ho, s'ha de fer una llista de diccionaris que tindra les seguents claus:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"filename"}),": Arxiu xml que s'ha modificat"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"records"}),": Llistat de ",(0,a.jsx)(n.code,{children:"ids"})," a actualitzar"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"    files_and_records_to_load = [\n        {\n            'filename': 'giscedata_crm_lead_view.xml',\n            'records': [\n                'giscedata_crm_leads_view_form',\n                'giscedata_crm_leads_view_form_v2',\n                'giscedata_crm_leads_view_tree',\n                'view_crm_stage_validation_template_form',\n            ]\n        },\n    ]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Un cop tenim el diccionari fet, importarem el seguent modul i executarem aquest codi per a carregar els ids."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from oopgrade.oopgrade import load_data_records\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"    for file_to_load in files_and_records_to_load:\n        logger.info(\"[{filename}]Update XMLs.\".format(filename=file_to_load['filename']))\n        load_data_records(\n            cursor, module_name, file_to_load['filename'], file_to_load['records'], mode=\"update\"\n        )\n        logger.info(\"[{filename}]XMLs succesfully updated.\".format(filename=file_to_load['filename']))\n"})}),"\n",(0,a.jsx)(n.h2,{id:"obtenir-pool",children:"Obtenir pool"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import pooler\npool = pooler.get_pool(cursor.dbname)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var i=r(6540);const a={},o=i.createContext(a);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);