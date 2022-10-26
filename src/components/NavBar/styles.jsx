import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  padding-left: 15px;

  & li {
    padding: 0 10px;
  }

  & li:hover {
    cursor: pointer;
    color: hsl(0, 0%, 0%);
  }

  @media screen and (max-width: 375px) {
    padding-left: 0;
  }
`;

export default Container;
