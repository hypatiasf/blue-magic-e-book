import React, { FC, useState } from "react";
import "./EBook.css";
import { EBookSection } from "./types";
import Cover from "../Cover";
import Prologue from "../Prologue";
import EBookContent from "../EBookContent";

const EBook: FC = () => {
  const [section, setSection] = useState<EBookSection>("cover");

  const goToSection = (section: EBookSection) => () => {
    setSection(section);
  };

  let showSection;
  if (section === "cover") showSection = <Cover goToPrologue={goToSection("prologue")} />;
  else if (section === "prologue") showSection = <Prologue goToContent={goToSection("content")} />;
  else if (section === "content") showSection = <EBookContent />;

  return <div id={"e-book"}>{showSection}</div>;
};

export default EBook;
