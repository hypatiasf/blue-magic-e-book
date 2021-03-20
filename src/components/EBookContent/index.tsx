import React, { FC } from "react";
import BookBackground from "../../assets/bg/book.png";
import "./EBookContent.css";
import EBookContext from "../../context/EBookContent";
import useBookStatus from "../../hooks/useBookStatus";
import Paginator from "../Paginator";
import SpellList from "../SpellList";
import SpellDetails from "../SpellDetails";

const EBookContent: FC = () => {
  const bookStatus = useBookStatus();

  return (
    <EBookContext.Provider value={bookStatus}>
      <div className={"section"} style={{ backgroundImage: `url(${BookBackground})` }}>
        <div className={"page"}>
          <Paginator />
          <div id={"spell-id"} style={{ backgroundImage: `url(${bookStatus.spellIds})` }} />
          <SpellList />
        </div>
        <div className={"page"}>
          <SpellDetails />
        </div>
      </div>
    </EBookContext.Provider>
  );
};

export default EBookContent;
