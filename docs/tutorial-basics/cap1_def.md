---
sidebar_position: 1
---

#  Capitulo 1: Deforestación

A continuacion se describe el proceso para descargar los datos de deforestacion de la metodologia RADD, el post-proceso para poder subir los datos a la plataforma


## Descarga datos
1. Los datos se obtienen utilizacion un Script en JavaScript (JS) que se utiliza dentro de la plataforma Google Earth Engine (GEE), para obtener acceso al codigo se debe enviar un correo al administrador solicitando el permiso correspondiente.
2. Vectorizar los datos, debido a que el archivo raster contiene dos bandas (alertas y fechas) se deben vectorizar ambas, se usa la herramienta "Polygonize de GDAL en QGIS 3.x" para realizar este procedimiento ![imagen 2](/img/2.png)
3. Filtrar los datos de alerta al valor "3", esto debido que son los datos mas confiables ![imagen 3](/img/3.png).
4. Debido que el script descarga los datos existentes, se debe verificar cual es la ultima fecha en el modulo de Forland para tomar este dato como fecha inicial a filtar ![imagen 4](/img/4.png).
	- Filtrar los datos de fechas a las correspondientes, es decir, de la fecha obtenida anteriormente, hasta la ultima que se registre en el archivo vector.
	- Como la fecha esta en formato día del año se sugiere usar el GNSS Calendar para saber desde qué día del año se quiere tener en la plataforma. [GNSS Calendar](https://www.gnsscalendar.com/)

***nota: Para cruzar los datos espacialmente debemos intersectar los polígonos de alertas con los polígonos de las fechas, asi sabremos que polígonos estan en las fechas que queremos y son de máxima confiabilidad para el algoritmo en cuestión.***

5. Unir los dos vectores (usar "Join Attibutes by Location - intersets" en QGIS) ![imagen 5](/img/5.png), en este paso habrá polígonos que no tienen la alerta 3 por lo que se deben filtrar y eliminarlos, recordar que el archivo vector principal es el que lleva las fechas.
6. crear un índice
- para crear el índice se usa la calculadora de campo y se escribe la expresión "$id" ![imagen 6](/img/6.png)
7.  Usando la calculadora de campos, calcular área en hectáreas con la siguiente expresión.
	- "area($geometry) /10000" ![imagen 7](/img/7.png)
8. Filtrar los polígonos mayores a 0.3 ha ![imagen 8](/img/8.png)
9. Reorganizar los datos para tener en primer lugar la columna de "id" (Utilizar la herramienta "Refactor del Core de QGIS") ![imagen 9](/img/9.png)
10. Para calcular el mes y el día correspondiente se debe exportar los datos como .csv (alfanumérico) ![imagen 10](/img/10.png)
	- Se ha generado un script en Python para este paso, solicitar al administrador el acceso ![imagen 10_1](/img/10_1.png)
11. Cargar en QGIS el archivo csv generado con los resultados, En propiedades de la capa se puede adicionar el csv con el resultado ![imagen 11](/img/11.png).
12. Al finalizar puede exportar los datos en su extension de preferencia, se recomienta gpgk.
