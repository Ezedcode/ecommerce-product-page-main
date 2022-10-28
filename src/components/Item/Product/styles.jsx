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
`;

export default Container;
