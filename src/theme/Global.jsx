import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
  }

  li {
    list-style: none;
    font-weight: bold;
    font-size:18px;
  }
  `;

export default Global;
