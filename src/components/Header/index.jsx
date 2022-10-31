import React from "react";
import Cart from "../Cart";

import Logo from "../../assets/img/logo.svg";
import Avatar from "../../assets/img/image-avatar.png";
import Container from "./styles";
import Menu from "../Menu";

const Header = () => {
  return (
    <Container>
      <div>
        <div>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <Menu />
        </div>
        <div className="userAndCart">
          <Cart />
          <div className="user">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default Header;
