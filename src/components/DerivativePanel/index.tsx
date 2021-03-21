import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";
import "./DerivativePanel.css";

const DerivativePanel: FC = () => {
  const { derivativeIcon, derivativeOpen, derivativeSrc, setDerivativeOpen } = useContext(EBookContext);

  if (!derivativeSrc) return null;
  return (
    <React.Fragment>
      <div
        id={"derivative-icon"}
        style={{ backgroundImage: `url(${derivativeIcon})` }}
        onClick={() => {
          setDerivativeOpen(!derivativeOpen);
        }}
      />
      {derivativeOpen && <div id={"derivative-description"} style={{ backgroundImage: `url(${derivativeSrc})` }} />}
    </React.Fragment>
  );
};

export default DerivativePanel;
