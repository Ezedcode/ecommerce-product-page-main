import React from "react";
import Minus from "../../../assets/img/icon-minus.svg";
import Plus from "../../../assets/img/icon-plus.svg";
import CartBtn from "../../../assets/img/Cart";
import GlobalVar from "../../../context/GlobalVar";
import { useState } from "react";

import Container from "./styles";
import { useContext } from "react";

const AddCart = () => {
  const [amount, setAmount] = useState(0);
  const { amountCart, setAmountCart } = useContext(GlobalVar);

  const addAmount = () => {
    const add = amount + 1;

    setAmount(add);
  };

  const subAmount = () => {
    if (amount > 0) {
      const sub = amount - 1;

      setAmount(sub);
    }
  };

  const addItemCart = () => {
    const addCart = amountCart + amount;
    setAmountCart(addCart);
  };

  return (
    <Container>
      <div className="amount">
        <button onClick={subAmount}>
          <img src={Minus} alt="icon" />
        </button>
        {amount}
        <button onClick={addAmount}>
          <img src={Plus} alt="icon" />
        </button>
      </div>
      <button className="addCart" onClick={addItemCart}>
        <CartBtn /> Add to cart
      </button>
    </Container>
  );
};

export default AddCart;
