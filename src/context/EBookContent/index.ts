import React from "react";

interface EBookContextInterface {
  page: number;
  spellId: number;
  spellPage: number;
  derivativeOpen: boolean;
}

const EBookContext = React.createContext<EBookContextInterface>({
  page: 0,
  spellId: -1,
  spellPage: 0,
  derivativeOpen: false,
});

export default EBookContext;
