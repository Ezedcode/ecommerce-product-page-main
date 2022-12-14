import styled from "styled-components";

const Container = styled.main`
  width: 60rem;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;

  & > section {
    width: 27rem;
    height: 23rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .company,
  & span:nth-child(2) {
    font-weight: bolder;
    color: hsl(26, 100%, 55%);
  }

  & h1 {
    font-size: 38px;
  }

  & .price {
    display: flex;
    align-items: center;
  }

  & span:nth-child(1) {
    color: black;
    font-size: 24px;
    font-weight: bolder;
    padding-right: 15px;
  }

  & span:nth-child(2) {
    width: 35px;
    padding: 0px 10px;
    border-radius: 5px;
    background-color: hsl(25, 100%, 94%);
  }

  & .previousPrice hr {
    position: relative;
    width: 57px;
    top: -8.2px;
    z-index: -1;
  }

  & section p {
    color: hsl(219, 9%, 45%);
  }

  @media screen and (max-width: 1040px) {
    width: 95%;
  }

  @media screen and (max-width: 858px) {
    width: 100%;
    margin: 0;
    flex-direction: column;

    & h1 {
      font-size: 30px;
    }

    & > section {
      width: 92%;
      height: 28rem;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 5rem;
    }

    & section section {
      width: 100%;
    }

    & .sectionPrice {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 500px) {
    & .content {
      width: 27rem;
    }
  }
`;

export default Container;
