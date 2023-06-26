import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await response.json();

  return {
    props: {
      users: jsonData,
    },
  };
}

const ListUsers = ({ users }) => {
  return (
    <>
      <h1>Lista de usuarios</h1>
      <br />
      <ul>
        {users.map((user) => {
          return (
            <li>
              {/*Hay que usar el componente Link en vez de <a href={`users/${user.id}`}>{user.name}</a> ya que el componente está preparado
              para hacer la navegación de forma óptima y sin recargar la página*/}
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListUsers;
