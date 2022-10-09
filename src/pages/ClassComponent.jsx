import React from "react";
import UserList from "../components/UserList";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, data } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

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
  }
}

export default ClassComponent;
