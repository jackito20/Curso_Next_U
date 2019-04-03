var libros_biblioteca = {
  "libros":[
    {
      "codigo":"eft",
      "titulo": "Un libro magico",
      "editorial": "Santillana",
      "fecha_publicacion":"Junio-2018",
      "edicion":"3era",
      "estado":"disponible",
      "numeroPaginas":300,
      "numeroCopias":100,
      "autores":[
        {
          "nombre":"Jose Díaz",
          "fechaNacimiento": "30-06-1960",
          "nacionalidad": "Venezolano"
        },
        {
          "nombre":"Juan Ortiz",
          "fechaNacimiento": "30-05-1950",
          "nacionalidad": "Colombiano"
        }
      ]
    },
    {
      "codigo": "093E1D2",
      "titulo": "Ipsum quia dolor sit am",
      "editorial": "Programming Books",
      "fecha_publicacion": "10/10/1994",
      "edicion": "2da edición",
      "estado": "activo",
      "numero_paginas": 240,
      "numero_copias": 2,
      "autores": [
        {
          "nombre": "Finibus Bonorum",
          "fecha_nacimiento": "03/12/1940",
          "nacionalidad": "Ruso"
        },
        {
          "nombre": "Totam Rem Aperiam",
          "fecha_nacimiento": "11/08/1970",
          "nacionalidad": "Turco"
        }
      ]
    },
    {
      "codigo": "03A18B",
      "titulo": "Lorem ipsum",
      "editorial": "Programming Books",
      "fecha_publicacion": "03/03/1996",
      "edicion": "2da edición",
      "estado": "activo",
      "numero_paginas": 250,
      "numero_copias": 6,
      "autores": [
        {
          "nombre": "Amet indolorum",
          "fecha_nacimiento": "10/11/1956",
          "nacionalidad": "Griego"
        },
        {
          "nombre": "Richard McClintoc",
          "fecha_nacimiento": "09/09/1945",
          "nacionalidad": "Inglés"
        }
      ]
    }
  ]
}

alert("El libro "+libros_biblioteca.libros[0].titulo+" tiene el codigo "+libros_biblioteca.libros[0].codigo+" y fue publicado el "+libros_biblioteca.libros[0].fecha_publicacion);
