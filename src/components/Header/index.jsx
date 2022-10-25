import React from "react";
import Cart from "../Cart";
import NavBar from "../NavBar";

import Logo from "../../assets/img/logo.svg";
import Avatar from "../../assets/img/image-avatar.png";
import Container from "./styles";

const Header = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <NavBar />
      </div>
      <div>
        <Cart />
        <img src={Avatar} alt="avatar" />
      </div>
    </Container>
  );
};

export default Header;
