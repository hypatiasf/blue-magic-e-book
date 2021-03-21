import { useEffect, useState } from "react";
import ViewSpell from "./ViewSpell";
import {
  getDerivativeDescription,
  getPageNumberIcons,
  getSpellDescription,
  getSpellPageIcons,
  getSpellIds,
  getSpellIcons,
  SpellIcons,
  getDerivativeIcon,
} from "../../services/spell/resources";
import spells from "../../services/spell/spells";

export interface BookStatus {
  page: number;
  viewSpell: ViewSpell;
  derivativeOpen: boolean;

  pageNumberIcons: string[];
  spellIcons: SpellIcons;
  spellIds: string;
  spellPageIcons: string[];
  descriptionSrc: string;
  derivativeIcon: string;
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

  const [page, setPage] = useState(initialPage);
  const [viewSpell, setViewSpell] = useState<ViewSpell>(initialViewSpell);
  const [derivativeOpen, setDerivativeOpen] = useState(initialDerivativeOpen);

  const [pageNumberIcons, setPageNumberIcons] = useState<string[]>([]);
  const [spellIcons, setSpellIcons] = useState<SpellIcons>({});
  const [spellIds, setSpellIds] = useState(getSpellIds(initialPage));
  const [spellPageIcons, setSpellPageIcons] = useState<string[]>([]);
  const [descriptionSrc, setDescriptionSrc] = useState("");
  const [derivativeIcon, setDerivativeIcon] = useState("");
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
    setSpellPageIcons([]);
    setDerivativeSrc("");
  };

  const switchToSpell = (spellId: number) => {
    setViewSpell({ ...initialViewSpell, id: spellId });
    setSpellPageIcons(getSpellPageIcons(spellId));
    setDerivativeOpen(initialDerivativeOpen);
    setDerivativeIcon(getDerivativeIcon(spellId));
    setDerivativeSrc(getDerivativeDescription(spellId));
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

  return {
    page,
    viewSpell,
    derivativeOpen,

    pageNumberIcons,
    spellIcons,
    spellIds,
    spellPageIcons,
    descriptionSrc,
    derivativeIcon,
    derivativeSrc,

    goToPage,
    switchToSpell,
    goToSpellPage,
    setDerivativeOpen,
  };
};

export default useBookStatus;
