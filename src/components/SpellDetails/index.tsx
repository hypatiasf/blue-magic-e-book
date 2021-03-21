import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";
import "./SpellDetails.css";

const SpellDetails: FC = () => {
  const {
    descriptionSrc,
    spellPageIcons,
    derivativeSrc,
    goToSpellPage,
    derivativeOpen,
    setDerivativeOpen,
  } = useContext(EBookContext);

  const clickSpellPageIcon = (page: number) => () => goToSpellPage(page);

  return (
    <div id={"spell-details"} style={{ backgroundImage: `url(${descriptionSrc})` }}>
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
    </div>
  );
};

export default SpellDetails;
