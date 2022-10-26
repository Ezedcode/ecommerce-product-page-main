import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  position: relative;

  & > div {
    width: 90%;
    margin: 0 auto;
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
    padding-left: 20px;
  }

  & > div > div:first-child {
    display: flex;
  }

  @media screen and (max-width: 375px) {
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
