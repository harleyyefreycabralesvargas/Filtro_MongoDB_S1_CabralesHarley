# Examen MongoDB - Tienda Temática de Anime

Este repositorio contiene los archivos usados para el examen de MongoDB, donde se trabajó con una base de datos de productos de una tienda de anime.

## Contenido del repositorio:

-   data_products_anime.json: Archivo con al menos 20 productos para insertar en la base de datos.

-   script.js: Script con todas las operaciones MongoDB solicitadas en el examen (insertar, actualizar, consultar y eliminar).

-   README.md: Este archivo, que explica cómo importar los datos y ejecutar el script.

## Instrucciones para ejecutar el proyecto:

### 1.  Clonar el repositorio:

Primero crea una carpeta, accede a ella y ábrela en la terminal, clona el repositorio desde GitHub con el siguiente comando.
git init
git clone https://github.com/harleyyefreycabralesvargas/Filtro_MongoDB_S1_CabralesHarley

Se descargara todo el contenido del repositorio en una carpeta llamada "Filtro_MongoDB_S1_CabralesHarley".

### 2.  Importar los datos a MongoDB:

Los productos en formato json se decidieron copiar e insertar con un insertMany a la colección products dentro del script.

### 3.  Ejecutar el script con las operaciones:

#### Requisito previo: Tener descargado mongosh en tu terminal y tenerlo activado locamente

Ya una vez descargado el contenido del repositorio en tu carpeta,  accede a la carpeta “Filtro_MongoDB_S1_CabralesHarley”  y la abrirás en terminal, para después ejecutar el siguiente comando.

mongosh < script.js

Se ejecutara el archivo script.js en tu conexión local de Mongo DB.

### 4. Revisión de la ejecución

Dependiendo de donde se quiera ver conexión se ejecutara distintas maneras de conectarse pero todas con la misma URI "mongodb://localhost:27017" y se podrá ver las bases de datos en nuestra conexión local e ingresaremos a la base de datos "anime_store" donde podremos ver en la colección products todos los productos con los procedimientos realizados en el script.js.

* En la terminal ejecutaremos el comando "mongosh" una vez ejecutado ya estaremos conectados local mente y podremos ver todas las bases de datos pero ejecutamos el comando "use anime_store" para estar en la base de datos de nuestro interés y desde de ahí ejecutar las operaciones que deseemos.

* En MongoDB Compass se pegara la URI mongodb://localhost:27017 en la URI en New Connection y nos conectaremos.

* En Visual Studio Code  se debe descargar la extensión MongoDB for VS Code y saldrá dentro de la extensión para añadir conexión con Connection String accedemos y aparecerá arriba una barra para escribir e ingresamos la URI
  mongodb://localhost:27017 y estaremos conetados local mente.


## Autor: 

Harley Yefrey Cabrales Vargas 
