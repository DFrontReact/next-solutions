import Link from "next/link";
import React from "react";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const {id} = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const jsonData = await response.json();

  return {
    props: {
      userTab: jsonData
    },
  };
}

const UserTab = ({userTab}) => {
  return (
    <>
      <h1>Ficha de usuario</h1>
      <br></br>
      <span><strong>Nombre: </strong>{userTab.name}</span>
      <br></br>
      <span><strong>Nick: </strong>{userTab.username}</span>
      <br></br>
      <span><strong>Email: </strong>{userTab.email}</span>
      <br></br>
      <br></br>
      <Link href={`/users/${userTab.id}/albums`}>Ver álbumes</Link>
    </>
  );
};

export default UserTab;
