import React from "react";
import Userprofile from "./Userprofile";

function User() {
  const userList = [
    {
      id: 1,
      userName: "User 1",
      mobile: "+91 00000 11111",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      userName: "User 2",
      mobile: "+91 00000 22222",
      email: "user2@gmail.com",
    },
  ];
  return (
    <>
      <p>User Information</p>
      {userList.map((user) => (
        <Userprofile key={user.id} userName={user.userName} mobile={user.mobile} email={user.email} />
      ))}
    </>
  );
}

export default User;
