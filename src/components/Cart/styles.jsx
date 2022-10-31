import styled from "styled-components";

const Container = styled.div`
  & .amountInCart {
    position: absolute;
    font-size: 10px;
    font-weight: bolder;
    padding: 0 7px;
    border-radius: 10px;
    color: hsl(0, 0%, 100%);
    border: 1px solid hsl(26deg 98% 53%);
    background-color: hsl(26, 100%, 55%);
    top: 29px;
    right: 36px;
  }

  & .inCart {
    position: absolute;
    width: 320px;
    height: 217px;
    border-radius: 7px;
    box-shadow: 0px 4px 11px -3px hsl(219deg 6% 45%);
    background-color: hsl(0, 0%, 100%);
    top: 80px;
    right: -13px;
    display: ${(props) => (props.showCart ? "flex" : "none")};
    flex-direction: column;
  }

  & .inCart > p:first-child {
    margin: 20px 20px;
  }

  & .inCart > p:last-child {
    position: relative;
    align-self: center;
    justify-content: center;
    top: 30%;
  }

  & .productInCart {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 20px;
  }

  & .item {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .item > div:first-child {
    display: flex;
  }

  & .itemProduct {
    margin-right: 10px;
    border-radius: 5px;
  }

  & .delete {
    background: none;
    border: none;
    justify-content: end;
  }

  & .checkout {
    height: 45px;
    border-radius: 10px;
    border: none;
    color: hsl(0, 0%, 100%);
    font-weight: bolder;
    justify-content: center;
    background-color: hsl(26, 100%, 55%);
  }

  & .total {
    font-weight: bolder;
    color: black;
  }

  & .checkout:hover,
  & .delete:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  & > div:first-child {
    padding: 5px;
    padding-right: 20px;
  }

  & > div:first-child:hover {
    cursor: pointer;
  }

  & > div:first-child:hover path {
    fill: black;
  }
`;

export default Container;
