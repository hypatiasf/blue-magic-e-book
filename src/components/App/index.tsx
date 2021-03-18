import React, { FC } from "react";
import "./App.css";
import EBook from "../EBook";

const App: FC = () => {
  return (
    <div className="App">
      <EBook style={{ margin: "0 auto" }} />
    </div>
  );
};

export default App;
