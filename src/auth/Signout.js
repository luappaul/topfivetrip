import React from "react";
import "../Component/NavBar.css";

export default function Navbar({ signout }) {
  return <span onClick={() => signout(res => console.log(res))}>Log Out</span>;
}
