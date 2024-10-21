# Blog API

- forntend:
  - Obtener todas las publicaciónes
  - Obtener una en especifico 
  - Obtener todas las categorias 
  - Obtenertodos los posts de una categoria en especifico
  - obtener todos los posts que eh creado
  - Podemos paginar los posts
  - Acciones de CRUD sobre posts
  - Crear categorias

--json
  {
    "total": 68,
    "prev": "localhost:9000/api/v1/posts?start=51&limit=60"
    "next" "localhost/9000/api/v1/posts?start=51&limit=60"
    data: [
      {
        "id": "286c10e1-605b-4366-8aa4-b7a76afd3e2b",
        "title": "titleExample",
        "content": "lorem",
        "createBy": {
          "id": "1234",
          "name": "Julio",
          "email" "juliodev@email.com"
        },
        "categories": {
          "id": "ab3f1623-80ca-443c-9d18-c6466aee30a2" 
          "name" "Technology"
        }
      }
    ]
  }

//Rutas 

/api/v1

/users
 - /me
 - /me/post
 - /me/post/:id
 - /:id

 /categories
 - /:id
 - /:id/posts

 /posts
 - /:id