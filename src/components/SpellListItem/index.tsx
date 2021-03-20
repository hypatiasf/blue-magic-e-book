import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";
import "./SpellListItem.css";

interface SpellListItemProps {
  spellId: number;
  spellIconSrc: string;
}

const SpellListItem: FC<SpellListItemProps> = ({ spellId, spellIconSrc }: SpellListItemProps) => {
  const { switchToSpell } = useContext(EBookContext);

  return (
    <div className={"spell-list-item"}>
      <div
        className={"spell-icon"}
        style={{ backgroundImage: `url(${spellIconSrc})` }}
        onClick={() => {
          switchToSpell(spellId);
        }}
      />
    </div>
  );
};

export default SpellListItem;
