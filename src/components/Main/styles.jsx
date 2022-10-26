import styled from "styled-components";

const Container = styled.main`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    width: 100%;
    margin: 0;
    background-color: aqua;
    flex-direction: column;

    & section {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export default Container;
