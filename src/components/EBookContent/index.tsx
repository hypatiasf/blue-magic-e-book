import React, { FC } from "react";
import BookBackground from "../../assets/bg/book.png";
import EBookContext from "../../context/EBookContent";
import useBookStatus from "../../hooks/useBookStatus";
import SpellList from "../SpellList";
import SpellDetails from "../SpellDetails";

const EBookContent: FC = () => {
  const bookStatus = useBookStatus();

  return (
    <EBookContext.Provider value={bookStatus}>
      <div className={"section"} style={{ backgroundImage: `url(${BookBackground})` }}>
        <div className={"page"}>
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
