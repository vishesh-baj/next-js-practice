import React from "react";
import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <React.Fragment>
      <h1>List of users </h1>
      <hr />
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
