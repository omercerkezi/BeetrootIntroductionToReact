import React from "react";

const UserList = ({ id, name, username, email }) => {
  return (
    <div className="container">
      <h2>User {id}</h2>
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Username:</span> {username}
      </p>
      <p>
        <span>Email:</span> {email}
      </p>
    </div>
  );
};

export default UserList;
