import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Global from "./theme/Global";
import GlobalVar from "./context/GlobalVar";
import { useState } from "react";

const App = () => {
  const [amountCart, setAmountCart] = useState(0);
  const [price, setPrice] = useState();

  return (
    <GlobalVar.Provider value={{ amountCart, setAmountCart, price, setPrice }}>
      <Header />
      <Main />
      <Global />
    </GlobalVar.Provider>
  );
};

export default App;
