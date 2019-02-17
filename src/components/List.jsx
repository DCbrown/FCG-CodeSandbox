import React from "react";

const List = props => {
  return (
    <div>
      <h1>List</h1>
      <ul>
        {props.acceptedClients.map((item, key) => (
          <li key={item.id}>
            {item.id} {item.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
