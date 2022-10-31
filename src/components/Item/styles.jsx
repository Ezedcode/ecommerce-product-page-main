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

  & > div:last-child > div:first-child {
    position: relative;
  }

  & .next-item {
    position: absolute;
    top: 47%;
    padding: 10px 15px;
    border-radius: 30px;
  }

  & .next-item:nth-child(2) {
    left: -5%;
    border: none;
  }

  & .next-item:last-child {
    right: -5%;
    border: none;
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

  & > div:last-child .grid-thumbnail > div {
    margin: 0 10px;
  }

  & .close-btn {
    border: none;
    margin-bottom: 10px;
  }

  & path {
    fill: hsl(0, 0%, 100%);
  }

  & .close-btn:hover path {
    fill: hsl(26, 100%, 55%);
  }

  & .grid-thumbnail > div {
    border: 2px solid transparent;
    border-radius: 10px;
    height: 59px;
  }

  & .imgCheck {
    background-color: hsl(0, 0%, 100%, 0.8);
    border: 2px solid hsl(26, 100%, 55%) !important;
  }

  & .imgCheck img {
    position: relative;
    z-index: -1;
  }

  & .grid-thumbnail > div:hover {
    background-color: hsl(0, 0%, 100%, 0.8);
    cursor: pointer;
  }

  & .grid-thumbnail:hover > div:hover img {
    position: relative;
    z-index: -1;
  }

  & .close-btn:hover,
  & button:hover {
    cursor: pointer;
  }

  & button:hover path {
    cursor: pointer;
    stroke: hsl(26, 100%, 55%);
  }

  @media screen and (max-width: 858px) {
    & .active {
      position: static;
      width: 100%;

      margin-top: 2rem;
    }

    & > div:first-child {
      display: none;
    }

    & > div:last-child {
      display: flex;
    }

    & button {
      display: block;
    }

    & > div:last-child .image-item {
      width: 100%;
      height: 19rem;
      object-fit: cover;
      object-position: top center;
    }

    & .next-item:nth-child(2) {
      left: 5%;
    }

    & .next-item:last-child {
      right: 5%;
    }

    & div:last-child .close-btn {
      display: none;
    }

    & .grid-thumbnail {
      display: none;
    }

    & img {
      border-radius: 0;
    }
  }
`;

export default Container;
