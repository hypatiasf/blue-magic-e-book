import { useEffect, useState } from "react";
import ViewSpell from "./ViewSpell";
import {
  getDerivativeDescription,
  getSpellDescription,
  getSpellIcons,
  SpellIcons,
} from "../../services/spell/resources";
import spells from "../../services/spell/spells";

export interface BookStatus {
  page: number;
  viewSpell: ViewSpell;
  derivativeOpen: boolean;

  spellIcons: SpellIcons;
  descriptionSrc: string;
  derivativeSrc: string;

  goToPage(page: number): void;
  switchToSpell(spellId: number): void;
  goToSpellPage(spellPage: number): void;
  setDerivativeOpen(open: boolean): void;
}

const useBookStatus = (): BookStatus => {
  const initialViewSpell: ViewSpell = { id: -1, page: 1 };
  const initialDerivativeOpen = false;

  const [page, setPage] = useState(1);
  const [viewSpell, setViewSpell] = useState<ViewSpell>(initialViewSpell);
  const [derivativeOpen, setDerivativeOpen] = useState(initialDerivativeOpen);

  const [spellIcons, setSpellIcons] = useState<SpellIcons>({});
  const [descriptionSrc, setDescriptionSrc] = useState("");
  const [derivativeSrc, setDerivativeSrc] = useState("");

  const goToPage = (page: number) => {
    setPage(page);
    setViewSpell(initialViewSpell);
    setDerivativeOpen(initialDerivativeOpen);

    const firstIcon = (page - 1) * spells.spellsPerPage;
    const lastIcon = page * spells.spellsPerPage;
    setSpellIcons(getSpellIcons(firstIcon, lastIcon));
  };

  const switchToSpell = (spellId: number) => {
    setViewSpell({ ...initialViewSpell, id: spellId });
  };

  const goToSpellPage = (spellPage: number) => {
    setViewSpell({ ...viewSpell, page: spellPage });
  };

  useEffect(() => {
    goToPage(1);
  }, []);

  useEffect(() => {
    setDescriptionSrc(getSpellDescription(viewSpell.id, viewSpell.page));
  }, [viewSpell]);

  useEffect(() => {
    if (derivativeOpen) setDerivativeSrc(getDerivativeDescription(viewSpell.id));
    else setDerivativeSrc("");
  }, [derivativeOpen]);

  return {
    page,
    viewSpell,
    derivativeOpen,

    spellIcons,
    descriptionSrc,
    derivativeSrc,

    goToPage,
    switchToSpell,
    goToSpellPage,
    setDerivativeOpen,
  };
};

export default useBookStatus;
