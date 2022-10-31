import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  color: hsl(219, 9%, 45%);
  padding-left: 15px;

  & li {
    position: relative;
    margin: 0 10px;
  }

  & li:hover {
    cursor: pointer;
    color: hsl(0, 0%, 0%);
  }

  & hr {
    position: absolute;
    width: 100%;
    top: 3.7rem;
    border: 2px solid transparent;
  }

  & li:hover hr {
    border: 2px solid hsl(26, 100%, 55%);
  }

  @media screen and (max-width: 858px) {
    padding-left: 0;
  }
`;

export default Container;
