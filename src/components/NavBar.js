import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkTags = links.map((name) => {
    return <a key={name} href={`#${name}`}>{name}</a>
  })
  return <nav>
    {linkTags}
  </nav>;
}

export default NavBar;
