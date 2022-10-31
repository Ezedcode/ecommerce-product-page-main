import styled, { createGlobalStyle, keyframes } from "styled-components";

const animation = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
`;

export const Container = styled.div`
  display: flex;

  &.active {
    position: absolute;
    background-color: hsl(0, 0%, 0%, 75%);
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 1;
  }

  &.active .${(props) => (props.animation === false ? "hide" : "show")} {
    left: ${(props) => (props.animation === false ? "-100%" : "0%")};
    animation: ${animation} 0.5s;
    transition: 0.5s ease-in-out;
  }

  & .menu-btn {
    width: 30px;
    border: none;
    background: none;
    margin-top: 2.5px;
    display: none;
  }

  & .menu-btn {
    padding-right: 2em;
  }

  &.active .nav-bar {
    display: block;
  }

  &.active .menu-btn {
    padding-bottom: 3rem;
  }

  &.active .nav-bar nav {
    flex-direction: column;
  }

  &.active .nav-bar nav li {
    padding: 10px 0;
  }

  @media screen and (max-width: 375px) {
    & > div {
      display: none;
      position: relative;
      background-color: hsl(0, 0%, 100%);
      top: 0;
      left: -100%;
      flex-direction: column;
      height: 100vh;
      width: 55%;
      padding-left: 2em;
      padding-top: 2rem;
    }

    &.active > div {
      display: block;
    }

    & .menu-btn {
      display: block;
    }

    & .nav-bar {
      display: none;
    }
  }
`;

export const DesableScroll = createGlobalStyle`
  body {
    height: 100vh;
    overflow: hidden;
  }
`;
