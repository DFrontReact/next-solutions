## Enunciado

En este ejercicio vamos a hacer 3 llamadas a APIs usando los distintos métodos de Fetching de datos, rellenando así las páginas creadas anteriormente.

Haremos la petición correspondiente en cada págica con el método indicado en cada una:

- users: https://jsonplaceholder.typicode.com/users getStaticProps()
  - id: https://jsonplaceholder.typicode.com/users/{id} getStaticPaths()
    - albums: https://jsonplaceholder.typicode.com/users/{id}/albums getServerSideProps()
