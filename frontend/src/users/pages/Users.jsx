import React from "react";
import UsersList from "../components/UsersList";


const Users = () => {

 

  const USERS = [
    { 
      id: 'u1', 
      name: 'Max', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80', 
      placeCount: 69
    },
  ];

  return (
    <UsersList items = {USERS}/>
  );
}

export default Users;