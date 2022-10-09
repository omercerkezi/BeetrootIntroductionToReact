import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import "../functionComponent.css";

const FunctionComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="app">
      {data.map((item) => (
        <UserList
          key={item.id}
          id={item.id}
          name={item.name}
          username={item.username}
          email={item.email}
        />
      ))}
    </div>
  );
};

export default FunctionComponent;
