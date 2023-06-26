import React from "react";

export async function getServerSideProps({query}) {
  const {id} = query;

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
  const jsonData = await response.json();

  return {
    props: {
      albums: jsonData
    },
  };
}

const Albums = ({albums}) => {
  return (
    <>
      <h1>Albums del usuario</h1>
      <br/>
      <ul>
        {albums.map(album => {
          return <li>{album.title}</li>
        })}
      </ul>
    </>
  );
};

export default Albums;
