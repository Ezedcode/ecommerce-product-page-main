import React from "react";
import Item from "../Item";
import Data from "../../data/data.json";
import Container from "./styles";
import AddCart from "../Cart/AddCart";
import { useContext } from "react";
import GlobalVar from "../../context/GlobalVar";

const Main = () => {
  const { setPrice } = useContext(GlobalVar);
  setPrice(Data.price[0]);

  return (
    <Container>
      <Item />
      <section>
        <p className="company">{Data.company}</p>
        <h1>{Data.title}</h1>
        <p>{Data.content}</p>
        <p>
          <div className="price">
            <span>${Data.price[0]}</span>
            <span>{Data.percentage}</span>
          </div>
          <p className="previousPrice">
            ${Data.price[1]}
            <hr />
          </p>
        </p>
        <section>
          <AddCart />
        </section>
      </section>
    </Container>
  );
};

export default Main;
