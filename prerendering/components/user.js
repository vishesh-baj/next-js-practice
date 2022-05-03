const User = ({ user }) => {
  return (
    <>
      <h5> {user.name}</h5>
      <p> {user.email}</p>
      <hr />
    </>
  );
};

export default User;
