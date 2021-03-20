import spells from "./spells";

export type Resources = { [key: string]: string };
export type SpellIcons = { [key: number]: string };

let icons: Resources;
let descriptions: Resources;

const importAll = (r: __WebpackModuleApi.RequireContext): Resources => {
  const resources: Resources = {};
  for (const path of r.keys()) {
    const name = path.replace("./", "").replace(".png", "");
    resources[name] = r(path).default;
  }
  return resources;
};

const loadAll = (): void => {
  descriptions = importAll(require.context("../../assets/fg", false, /\.png$/));
  icons = importAll(require.context("../../assets/img", false, /\.png$/));
};

const idToFileName = (spellId: number): string => {
  if (spellId < 10) return `0${spellId}`;
  else return `${spellId}`;
};

const getPageNumberIcons = (activePage: number): string[] => {
  if (!descriptions || !icons) loadAll();

  const pageIcons = [];
  for (let page = 1; page <= spells.page; page++) {
    const fileName = `p${page}` + (page === activePage ? "l" : "");
    pageIcons.push(icons[fileName]);
  }
  return pageIcons;
};

const getSpellIcons = (fromId: number, toId: number): SpellIcons => {
  if (!descriptions || !icons) loadAll();

  if (fromId < 1) fromId = 1;
  if (toId < 1) toId = 1;
  if (fromId > spells.number) fromId = spells.number;
  if (toId > spells.number) toId = spells.number;

  const spellIcons: SpellIcons = {};
  for (let id = fromId; id <= toId; id++) {
    let fileName = idToFileName(id);
    if (spells.special.hasOwnProperty(id) && spells.special[id].derivative) {
      fileName += "a";
    }
    spellIcons[id] = icons[fileName];
  }
  return spellIcons;
};

const getSpellIds = (page: number): string => {
  if (!descriptions || !icons) loadAll();

  return descriptions[`P${page}n`];
};

const getSpellDescription = (spellId: number, spellPage: number): string => {
  if (!descriptions || !icons) loadAll();

  let fileName = idToFileName(spellId) + "f";
  if (spells.special.hasOwnProperty(spellId)) {
    fileName += "_" + String.fromCharCode(spellPage - 1 + "a".charCodeAt(0));
  }
  return descriptions[fileName] ?? "";
};

const getDerivativeDescription = (spellId: number): string => {
  if (!descriptions || !icons) loadAll();
  return spells.special.hasOwnProperty(spellId) && spells.special[spellId].derivative
    ? idToFileName(spellId) + "t"
    : "";
};

export { getPageNumberIcons, getSpellIcons, getSpellIds, getSpellDescription, getDerivativeDescription };
