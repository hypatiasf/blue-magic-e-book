import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";
import "./SpellDetails.css";

const SpellDetails: FC = () => {
  const { descriptionSrc, derivativeSrc, goToSpellPage, setDerivativeOpen } = useContext(EBookContext);
  return <div id={"spell-details"} style={{ backgroundImage: `url(${descriptionSrc})` }}></div>;
};

export default SpellDetails;
