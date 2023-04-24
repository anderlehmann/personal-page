import React from "react";
import './Header.css';

function Header() {
  return (
    <header id='header'>
      <nav id='navbar'>
        <span>SOBRE MIM</span>
        <span>CONHECIMENTOS</span>
        <span>PROJETOS</span>
        <span>CONTATO</span>
      </nav>
      <div id='icons-header'>
        <input id="switch" type="checkbox" name="theme"></input>
        <label for="switch"></label>
        <p>A</p>
      </div>
    </header>
  )
}

export default Header;