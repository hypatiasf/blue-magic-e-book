import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";

const SpellList: FC = () => {
  const { spellIcons } = useContext(EBookContext);
  return <div />;
};

export default SpellList;
