import React from "react";
import { useState } from "react";
import Close from "../../assets/img/icon-close.svg";
import Hamburger from "../../assets/img/icon-menu.svg";
import NavBar from "../NavBar";
import { Container, DesableScroll } from "./styles";

const Menu = () => {
  const [showMenu, setShowMenu] = useState();
  const [activeClass, setActiveClass] = useState();
  const [closeClass, setCloseClass] = useState();

  const activeMenu = () => {
    if (showMenu) {
      setCloseClass(false);

      setTimeout(() => {
        setActiveClass(undefined);
        setShowMenu(false);
      }, 5 * 100);
    } else {
      setShowMenu(true);
      setCloseClass(true);
      setActiveClass("active");
    }
  };

  return (
    <Container className={activeClass} animation={closeClass}>
      {!showMenu && (
        <button onClick={activeMenu} className="menu-btn">
          <img src={Hamburger} alt="menu-btn" />
        </button>
      )}
      <div className={!closeClass ? "hide" : "show"}>
        {showMenu && (
          <button onClick={activeMenu} className="menu-btn">
            <img src={Close} alt="menu-btn" />
          </button>
        )}
        <div className="nav-bar">
          <NavBar />
        </div>
      </div>
      {showMenu && <DesableScroll />}
    </Container>
  );
};

export default Menu;
