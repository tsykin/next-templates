import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-links">
      <Link href={"/"}>Data from JSON file inside app</Link>
      <Link href={"/markdown"}>Markdown</Link>
      <Link href={"/blog"}>Posts from API</Link>
    </div>
  );
};

export default Navbar;
