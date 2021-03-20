import { useEffect, useState } from "react";
import ViewSpell from "./ViewSpell";
import {
  getDerivativeDescription,
  getPageNumberIcons,
  getSpellDescription,
  getSpellIds,
  getSpellIcons,
  SpellIcons,
} from "../../services/spell/resources";
import spells from "../../services/spell/spells";

export interface BookStatus {
  page: number;
  viewSpell: ViewSpell;
  derivativeOpen: boolean;

  pageNumberIcons: string[];
  spellIcons: SpellIcons;
  spellIds: string;
  descriptionSrc: string;
  derivativeSrc: string;

  goToPage(page: number): void;
  switchToSpell(spellId: number): void;
  goToSpellPage(spellPage: number): void;
  setDerivativeOpen(open: boolean): void;
}

const useBookStatus = (): BookStatus => {
  const initialPage = 1;
  const initialViewSpell: ViewSpell = { id: -1, page: initialPage };
  const initialDerivativeOpen = false;

  const [page, setPage] = useState(1);
  const [viewSpell, setViewSpell] = useState<ViewSpell>(initialViewSpell);
  const [derivativeOpen, setDerivativeOpen] = useState(initialDerivativeOpen);

  const [pageNumberIcons, setPageNumberIcons] = useState<string[]>([]);
  const [spellIcons, setSpellIcons] = useState<SpellIcons>({});
  const [spellIds, setSpellIds] = useState(getSpellIds(initialPage));
  const [descriptionSrc, setDescriptionSrc] = useState("");
  const [derivativeSrc, setDerivativeSrc] = useState("");

  const goToPage = (page: number) => {
    setPage(page);
    setViewSpell(initialViewSpell);
    setDerivativeOpen(initialDerivativeOpen);

    const firstIcon = (page - 1) * spells.spellsPerPage + 1;
    const lastIcon = page * spells.spellsPerPage;
    setPageNumberIcons(getPageNumberIcons(page));
    setSpellIcons(getSpellIcons(firstIcon, lastIcon));
    setSpellIds(getSpellIds(page));
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

    pageNumberIcons,
    spellIcons,
    spellIds,
    descriptionSrc,
    derivativeSrc,

    goToPage,
    switchToSpell,
    goToSpellPage,
    setDerivativeOpen,
  };
};

export default useBookStatus;
