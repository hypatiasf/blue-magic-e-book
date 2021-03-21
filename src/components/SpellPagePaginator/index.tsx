import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";
import "./SpellPagePaginator.css";

const SpellPagePaginator: FC = () => {
  const { spellPageIcons, goToSpellPage } = useContext(EBookContext);

  const clickSpellPageIcon = (page: number) => () => goToSpellPage(page);

  return (
    <div id={"spell-page-icons"}>
      {spellPageIcons.map((iconSrc, key) => (
        <div
          key={key}
          className={"spell-page-icon"}
          style={{ backgroundImage: `url(${iconSrc})` }}
          onClick={clickSpellPageIcon(key + 1)}
        />
      ))}
    </div>
  );
};

export default SpellPagePaginator;
