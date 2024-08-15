import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.user);
  return (
    <header>
      <h2>Redux toolkit example</h2>
      <ul>
        <li>Name: {user.name}</li>
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
      </ul>
    </header>
  );
}
