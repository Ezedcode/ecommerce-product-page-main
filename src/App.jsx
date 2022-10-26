import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Global from "./theme/Global";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Global />
    </div>
  );
};

export default App;
