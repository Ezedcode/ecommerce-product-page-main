import styled from "styled-components";

const Container = styled.header`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  & > div:first-child,
  & > div:last-child {
    display: flex;
  }
`;

export default Container;
