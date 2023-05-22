import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await response.json();

  return {
    props: {
      users: jsonData
    },
  };
}

const ListUsers = ({users}) => {
  return (
    <>
      <h1>Lista de usuarios</h1>
      <br/>
      <ul>
        {users.map(user => {
          return <li><Link href={`users/${user.id}`}>{user.name}</Link></li>
        })}
      </ul>
    </>
  );
};

export default ListUsers;
