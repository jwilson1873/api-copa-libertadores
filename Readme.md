Nombre Desarrolador :  James Wilson Marambio   Octubre 2026

# API REST de Clubes Históricos - Copa Libertadores

Esta es una API REST construida con **Node.js** y **Express** que permite consultar información sobre 16 clubes históricos de la Copa Libertadores de América. El proyecto almacena los datos en memoria dinámica y ofrece diferentes endpoints para filtrar por países, buscar por identificadores únicos y consultar el historial de campeonatos.

---

## Requisitos Previos

instalado previamente lo siguiente en tu equipo:

- [Node.js](https://nodejs.org) 
- [Yarn](https://yarnpkg.com) 


## Instalación y Configuración

1. **Crear el repositorio:**
   
   mkdir api-copa-libertadores
   cd api-copa-libertadores


2. **Instalar dependencias:**
   Descarga Express y las herramientas de desarrollo utilizando Yarn:
   
   yarn install


3. **Ejecutar en modo de desarrollo:**
   Inicia el servidor local utilizando el script con recarga automática (`--watch` gestionado por Nodemon):
   
   yarn dev
   
   El servidor se levantará en el puerto **3000**: `http://localhost:3000`



## Endpoints de la API

La API maneja respuestas estandarizadas en formato **JSON** y utiliza códigos de estado HTTP adecuados (`200 OK`, `404 Not Found`).

### 1. Obtener todos los clubes
- **URL:** `/clubes`
- **Método:** `GET`
- **Descripción:** Retorna el listado completo de los 16 clubes sudamericanos.

### 2. Filtrar clubes por país (Query String)
- **URL:** `/clubes?pais={nombre_pais}`
- **Método:** `GET`
- **Ejemplo:** `http://localhost:3000/clubes?pais=Argentina`
- **Descripción:** Retorna únicamente los clubes que pertenecen al país solicitado (insensible a mayúsculas/minúsculas).

### 3. Obtener un club por su ID
- **URL:** `/clubes/:id`
- **Método:** `GET`
- **Ejemplo:** `http://localhost:3000/clubes/15`
- **Descripción:** Busca y retorna un único club según su ID incremental mediante el método `.find()`. Si no existe, devuelve un error 404.

### 4. Obtener títulos de un club específico
- **URL:** `/titulos/:club`
- **Método:** `GET`
- **Ejemplo:** `http://localhost:3000/titulos/Peñarol`
- **Descripción:** Retorna el nombre del club, la cantidad total de copas obtenidas y el desglose de los años de sus títulos.


## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para Javascript en el lado del servidor.
- **Express**: Framework para la gestión de rutas y peticiones HTTP.
- **Nodemon**: Herramienta de desarrollo para reiniciar automáticamente el servidor ante cambios en el código.