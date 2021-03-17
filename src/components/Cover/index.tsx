import React, { FC } from "react";
import CoverImage from "../../assets/bg/book_f.png";

interface PrologueProps {
  goToPrologue(): void;
}

const Cover: FC<PrologueProps> = ({ goToPrologue }: PrologueProps) => {
  return <div className={"section"} onClick={goToPrologue} style={{ backgroundImage: `url(${CoverImage})` }} />;
};

export default Cover;
