import React, { FC, useContext } from "react";
import EBookContext from "../../context/EBookContent";
import "./Paginator.css";

const Paginator: FC = () => {
  const { pageNumberIcons, goToPage } = useContext(EBookContext);

  return (
    <div id={"paginator"}>
      {pageNumberIcons.map((pageNumberSrc, key) => (
        <div
          key={key}
          className={"page-number"}
          style={{ backgroundImage: `url(${pageNumberSrc})` }}
          onClick={() => goToPage(key + 1)}
        />
      ))}
    </div>
  );
};

export default Paginator;
