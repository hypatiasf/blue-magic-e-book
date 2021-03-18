import React, { FC, useState } from "react";
import "./EBook.css";
import { EBookSection } from "./types";
import Cover from "../Cover";
import Prologue from "../Prologue";
import EBookContent from "../EBookContent";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const EBook: FC<Props> = ({ className, style }: Props) => {
  const [section, setSection] = useState<EBookSection>("cover");

  const goToSection = (section: EBookSection) => () => {
    setSection(section);
  };

  let showSection;
  if (section === "cover") showSection = <Cover goToPrologue={goToSection("prologue")} />;
  else if (section === "prologue") showSection = <Prologue goToContent={goToSection("content")} />;
  else if (section === "content") showSection = <EBookContent />;

  return (
    <div id={"e-book"} className={className} style={style}>
      {showSection}
    </div>
  );
};

export default EBook;
