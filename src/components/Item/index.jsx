import React, { useState, useEffect } from "react";
import { DesableScroll } from "../Menu/styles";
import Product from "./Product/product";
import Close from "../../assets/img/icon-close.svg";
import Container from "./styles";
import CloseBtn from "../../assets/img/icon-close";

const Item = () => {
  const [showItem, setShowItem] = useState(false);
  const [activeItem, setActiveItem] = useState();

  const clickItem = () => {
    if (!showItem) {
      setActiveItem("active");
      setShowItem(true);
    } else {
      setActiveItem(undefined);
      setShowItem(false);
    }
  };

  useEffect(() => {
    const item = document.querySelector(".image-item");

    item.addEventListener("click", () => setActiveItem(true));
    console.log(item);
  }, []);

  return (
    <Container display={showItem}>
      <div>
        <Product />
      </div>
      <div className={activeItem}>
        <button onClick={clickItem} className="close-btn">
          <CloseBtn />
        </button>
        <Product />
      </div>
      {showItem && <DesableScroll />}
    </Container>
  );
};

export default Item;
