import React from "react";
import { BookStatus } from "../../hooks/useBookStatus";

const EBookContext = React.createContext<BookStatus>({
  page: 1,
  viewSpell: { id: -1, page: 1 },
  derivativeOpen: false,
  derivativeSrc: "",
  descriptionSrc: "",
  pageNumberIcons: [],
  spellIcons: {},
  spellIds: "",
  spellPageIcons: [],
  goToPage(page: number): void {
    page;
  },
  goToSpellPage(spellPage: number): void {
    spellPage;
  },
  setDerivativeOpen(open: boolean): void {
    open;
  },
  switchToSpell(spellId: number): void {
    spellId;
  },
});

export default EBookContext;
