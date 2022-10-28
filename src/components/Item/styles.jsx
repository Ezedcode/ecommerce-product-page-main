import styled from "styled-components";

const Container = styled.div`
  & > div:last-child {
    display: ${(props) => (!props.display ? "none" : "flex")};
  }

  & .close-btn {
    background: none;
    border: none;
    margin-left: 24rem;
    padding-bottom: 20px;
  }

  & .close-btn path {
    fill: hsl(0, 0%, 100%);
  }

  & .active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: hsl(0, 0%, 0%, 75%);
  }
`;

export default Container;
