import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";

const SpellDetails: FC = () => {
  const { descriptionSrc, derivativeSrc, goToSpellPage, setDerivativeOpen } = useContext(EBookContext);
  return <div />;
};

export default SpellDetails;
