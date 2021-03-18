import React, { FC } from "react";
import BookBackground from "../../assets/bg/book.png";
import { getSpellIcons } from "../../services/spell/resources";

const EBookContent: FC = () => {
  return (
    <div className={"section"} style={{ backgroundImage: `url(${BookBackground})` }}>
      <div className={"page"}></div>
      <div className={"page"}></div>
    </div>
  );
};

export default EBookContent;
