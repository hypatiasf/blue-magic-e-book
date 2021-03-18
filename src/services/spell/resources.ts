import spells from "./spells";

type Resources = { [key: string]: string };
type SpellIcons = { [key: number]: string };

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

export { getSpellIcons };
