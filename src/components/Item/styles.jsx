import styled from "styled-components";

const Container = styled.div`
  & button {
    display: none;
  }

  & img {
    border-radius: 10px;
  }

  & .grid-thumbnail {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  & .active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: hsl(0, 0%, 0%, 75%);
  }

  & .active button {
    display: block;
  }

  & > div:last-child {
    display: ${(props) => (!props.display ? "none" : "flex")};
    flex-direction: column;
  }

  & > div:last-child .close-btn {
    background: none;
    display: flex;
    width: 100%;
    justify-content: end;
  }

  & > div:last-child .image-item {
    width: 400px;
  }

  & path {
    fill: hsl(0, 0%, 100%);
  }
`;

export default Container;
