import styled from "styled-components";

const Container = styled.nav`
  display: flex;

  & li {
    padding: 0 10px;
  }

  & li:hover {
    cursor: pointer;
    color: hsl(0, 0%, 0%);
  }
`;

export default Container;
