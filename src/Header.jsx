import React from "react";
import "./Header.css";

function Header() {
  const switchTheme = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark-mode");
  };

  return (
    <header id="header">
      <nav id="navbar">
        <span>SOBRE MIM</span>
        <span>CONHECIMENTOS</span>
        <span>PROJETOS</span>
        <span>CONTATO</span>
      </nav>
      <div id="icons-header">
        <input
          id="switch"
          type="checkbox"
          name="theme"
          onChange={switchTheme}
        ></input>
        <label htmlFor="switch"></label>
        <p>A</p>
      </div>
    </header>
  );
}

export default Header;
