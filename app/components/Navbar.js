import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-links">
      <h1>NavBar</h1>
      <Link href={"/"}>Data from local JSON file (inside an app)</Link>
      <Link href={"/blog"}>Getting posts from external API</Link>
      <Link href={"/md"}>Reading markdown file (.md)</Link>
      <Link href={"/mdx"}>MDX page with React elements</Link>
    </div>
  );
};

export default Navbar;
