import styled from "styled-components";

const Container = styled.header`
  width: 71%;
  margin: 0 auto;
  position: relative;

  & > div {
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
  }

  & > div > div:first-child,
  & > div > div:last-child {
    display: flex;
    align-items: center;
  }

  & .user img {
    height: 27px;
    border-radius: 50%;
    border: 2px solid transparent;
  }

  & .user:hover img {
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid hsl(26, 100%, 55%);
  }

  & > div > div:first-child {
    display: flex;
  }

  & hr {
    border: 1px solid hsl(223, 64%, 98%);
  }

  @media screen and (max-width: 1344px) {
    width: 60rem;
  }

  @media screen and (max-width: 1344px) {
    width: 95%;
  }

  @media screen and (max-width: 858px) {
    width: 92%;
    position: static;

    & > div > div:first-child {
      flex-direction: row-reverse;
    }

    & .menu nav {
      display: none;
    }

    & hr {
      display: none;
    }
  }
`;

export default Container;
