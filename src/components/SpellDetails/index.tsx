import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";
import "./SpellDetails.css";
import SpellPagePaginator from "../SpellPagePaginator";
import DerivativePanel from "../DerivativePanel";

const SpellDetails: FC = () => {
  const { descriptionSrc } = useContext(EBookContext);

  return (
    <div id={"spell-details"} style={{ backgroundImage: `url(${descriptionSrc})` }}>
      <SpellPagePaginator />
      <DerivativePanel />
    </div>
  );
};

export default SpellDetails;
