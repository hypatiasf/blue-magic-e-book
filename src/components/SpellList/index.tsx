import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";
import "./SpellList.css";
import SpellListItem from "../SpellListItem";

const SpellList: FC = () => {
  const { spellIcons } = useContext(EBookContext);

  return (
    <div id={"spell-list"}>
      {Object.entries(spellIcons).map(([spellId, spellIconSrc], key) => (
        <SpellListItem key={key} spellId={Number(spellId)} spellIconSrc={spellIconSrc} />
      ))}
    </div>
  );
};

export default SpellList;
