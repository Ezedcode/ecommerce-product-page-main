import React from "react";
import GlobalVar from "../../context/GlobalVar";
import CartIcon from "../../assets/img/Cart";
import Product from "../../assets/img/image-product-1-thumbnail.jpg";
import Delete from "../../assets/img/icon-delete.svg";
import { useContext } from "react";
import Container from "./styles";
import { useState } from "react";

const Cart = () => {
  const { amountCart, price, setAmountCart } = useContext(GlobalVar);
  const [showCart, setShowCart] = useState(false);

  const total = Number(price) * amountCart;

  const deleteItem = () => {
    setAmountCart(0);
  };

  const handleClick = () => {
    if (!showCart) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  return (
    <Container showCart={showCart}>
      <div onClick={handleClick}>
        <CartIcon />
      </div>

      {amountCart > 0 && <div className="amountInCart">{amountCart}</div>}
      <div className="inCart">
        <p>Cart</p>
        <hr />
        {amountCart === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="productInCart">
            <div className="item">
              <div>
                <img
                  src={Product}
                  alt="img-item"
                  width="50"
                  className="itemProduct"
                />
                <div>
                  <p>Autumn Limited Edition...</p>
                  <span>${`${price} x ${amountCart}  `}</span>
                  <span className="total">${total}.00</span>
                </div>
              </div>
              <button className="delete">
                <img src={Delete} alt="img-item" onClick={deleteItem} />
              </button>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
