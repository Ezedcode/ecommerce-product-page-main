import styled from "styled-components";

const Container = styled.div`
  width: 23rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    border: none;
    background: none;
    display: flex;
    padding: 10px 0;
  }

  & .amount,
  & .addCart {
    height: 45px;
    display: flex;
    border-radius: 10px;
    align-items: center;
  }

  & .amount {
    width: 40%;
    margin-right: 20px;
    background-color: hsl(223, 64%, 98%);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .addCart {
    width: 60%;
    color: hsl(0, 0%, 100%);
    font-weight: bolder;
    justify-content: center;
    background-color: hsl(26, 100%, 55%);
  }

  & img {
    padding: 0 15px;
  }

  & path {
    fill: hsl(0, 0%, 100%);
  }
  & svg {
    padding: 0 15px;
  }

  & button:hover,
  .addCart:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 7rem;
    flex-direction: column;

    & .amount,
    & .addCart {
      width: 100%;
      margin: 0;
    }
  }
`;

export default Container;
