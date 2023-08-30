"use strict";(self.webpackChunkdocudocu=self.webpackChunkdocudocu||[]).push([[690],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return t?r.createElement(f,n(n({ref:a},d),{},{components:t})):r.createElement(f,n({ref:a},d))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=t.length,n=new Array(s);n[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:o,n[1]=i;for(var c=2;c<s;c++)n[c]=t[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1690:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const s={sidebar_position:1},n="Capitulo 1: Deforestaci\xf3n",i={unversionedId:"tutorial-basics/cap1_def",id:"tutorial-basics/cap1_def",title:"Capitulo 1: Deforestaci\xf3n",description:"A continuacion se describe el proceso para descargar los datos de deforestacion de la metodologia RADD, el post-proceso para poder subir los datos a la plataforma",source:"@site/docs/tutorial-basics/cap1_def.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/cap1_def",permalink:"/documentacion_deforestacion/docs/tutorial-basics/cap1_def",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/cap1_def.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Deforestaci\xf3n",permalink:"/documentacion_deforestacion/docs/category/tutorial---deforestaci\xf3n"},next:{title:"Capitulo 2: Cargar informacion",permalink:"/documentacion_deforestacion/docs/tutorial-basics/cap2_carga"}},l={},c=[{value:"Descarga datos",id:"descarga-datos",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...s}=e;return(0,o.kt)(p,(0,r.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"capitulo-1-deforestaci\xf3n"},"Capitulo 1: Deforestaci\xf3n"),(0,o.kt)("p",null,"A continuacion se describe el proceso para descargar los datos de deforestacion de la metodologia RADD, el post-proceso para poder subir los datos a la plataforma"),(0,o.kt)("h2",{id:"descarga-datos"},"Descarga datos"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Los datos se obtienen utilizacion un Script en JavaScript (JS) que se utiliza dentro de la plataforma Google Earth Engine (GEE), para obtener acceso al codigo se debe enviar un correo al administrador solicitando el permiso correspondiente."),(0,o.kt)("li",{parentName:"ol"},'Vectorizar los datos, debido a que el archivo raster contiene dos bandas (alertas y fechas) se deben vectorizar ambas, se usa la herramienta "Polygonize de GDAL en QGIS 3.x" para realizar este procedimiento ',(0,o.kt)("img",{alt:"imagen 2",src:t(2396).Z,width:"1321",height:"657"})),(0,o.kt)("li",{parentName:"ol"},'Filtrar los datos de alerta al valor "3", esto debido que son los datos mas confiables ',(0,o.kt)("img",{alt:"imagen 3",src:t(4771).Z,width:"722",height:"732"}),"."),(0,o.kt)("li",{parentName:"ol"},"Debido que el script descarga los datos existentes, se debe verificar cual es la ultima fecha en el modulo de Forland para tomar este dato como fecha inicial a filtar ",(0,o.kt)("img",{alt:"imagen 4",src:t(4550).Z,width:"300",height:"320"}),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Filtrar los datos de fechas a las correspondientes, es decir, de la fecha obtenida anteriormente, hasta la ultima que se registre en el archivo vector."),(0,o.kt)("li",{parentName:"ul"},"Como la fecha esta en formato d\xeda del a\xf1o se sugiere usar el GNSS Calendar para saber desde qu\xe9 d\xeda del a\xf1o se quiere tener en la plataforma. ",(0,o.kt)("a",{parentName:"li",href:"https://www.gnsscalendar.com/"},"GNSS Calendar"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"nota: Para cruzar los datos espacialmente debemos intersectar los pol\xedgonos de alertas con los pol\xedgonos de las fechas, asi sabremos que pol\xedgonos estan en las fechas que queremos y son de m\xe1xima confiabilidad para el algoritmo en cuesti\xf3n."))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Unir los dos vectores (usar "Join Attibutes by Location - intersets" en QGIS) ',(0,o.kt)("img",{alt:"imagen 5",src:t(1175).Z,width:"1320",height:"650"}),", en este paso habr\xe1 pol\xedgonos que no tienen la alerta 3 por lo que se deben filtrar y eliminarlos, recordar que el archivo vector principal es el que lleva las fechas."),(0,o.kt)("li",{parentName:"ol"},"crear un \xedndice")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'para crear el \xedndice se usa la calculadora de campo y se escribe la expresi\xf3n "$id" ',(0,o.kt)("img",{alt:"imagen 6",src:t(7078).Z,width:"1150",height:"847"}))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Usando la calculadora de campos, calcular \xe1rea en hect\xe1reas con la siguiente expresi\xf3n.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'"area($geometry) /10000" ',(0,o.kt)("img",{alt:"imagen 7",src:t(318).Z,width:"1148",height:"837"})))),(0,o.kt)("li",{parentName:"ol"},"Filtrar los pol\xedgonos mayores a 0.3 ha ",(0,o.kt)("img",{alt:"imagen 8",src:t(9163).Z,width:"722",height:"739"})),(0,o.kt)("li",{parentName:"ol"},'Reorganizar los datos para tener en primer lugar la columna de "id" (Utilizar la herramienta "Refactor del Core de QGIS") ',(0,o.kt)("img",{alt:"imagen 9",src:t(4367).Z,width:"1312",height:"655"})),(0,o.kt)("li",{parentName:"ol"},"Para calcular el mes y el d\xeda correspondiente se debe exportar los datos como .csv (alfanum\xe9rico) ",(0,o.kt)("img",{alt:"imagen 10",src:t(2581).Z,width:"989",height:"631"}),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Se ha generado un script en Python para este paso, solicitar al administrador el acceso ",(0,o.kt)("img",{alt:"imagen 10_1",src:t(4790).Z,width:"1666",height:"910"})))),(0,o.kt)("li",{parentName:"ol"},"Cargar en QGIS el archivo csv generado con los resultados, En propiedades de la capa se puede adicionar el csv con el resultado ",(0,o.kt)("img",{alt:"imagen 11",src:t(5488).Z,width:"1301",height:"264"}),"."),(0,o.kt)("li",{parentName:"ol"},"Al finalizar puede exportar los datos en su extension de preferencia, se recomienta gpgk.")))}u.isMDXComponent=!0},2581:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/10-5ca81ca57ab10918764c3ead946e7f2e.png"},4790:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/10_1-26acbaf10011f3d086421463369f7251.png"},5488:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/11-f5a7d5c39f1f6d8faa9649d7cda24abb.png"},2396:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/2-b2394137f1b7cc05fb0d8762747eabdc.png"},4771:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/3-570f694479058e50334092564d1be840.png"},4550:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/4-cd53d809c9eb8a0260bd102215de15ed.png"},1175:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/5-ef5e6f01acf79e524c4274c61d80355c.png"},7078:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/6-1039848a08ea60fcd2dfaeef98fcda7d.png"},318:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/7-84291a9a3d25a5a0910bb46efc86f3b9.png"},9163:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/8-a4cfb8ec771e4de31218a9c9c7acac6f.png"},4367:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/9-104925a84df8aaf476df2fb18513233c.png"}}]);