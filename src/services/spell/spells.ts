import { Place } from "./place";

interface Spells {
  page: number;
  spellsPerPage: number;
  number: number;
  special: { [key: number]: SpellDetails };
}

interface SpellDetails {
  places?: Place[];
  derivative?: boolean;
}

const spells: Spells = {
  page: 7,
  spellsPerPage: 16,
  number: 104,
  special: {
    11: { places: ["Field", "Dungeon"] },
    17: { places: ["LaNoscea", "Thanalan", "BlackShroud", "Dungeon", "Dungeon"] },
    18: { places: ["Field", "Dungeon"] },
    19: { places: ["Field", "Dungeon"] },
    21: { places: ["Field", "Dungeon", "Dungeon"] },
    23: { places: ["Thanalan", "BlackShroud", "LaNoscea"] },
    28: { places: ["Field", "Dungeon"] },
    31: { places: ["LaNoscea", "Thanalan", "BlackShroud", "Dungeon", "Dungeon"] },
    84: { derivative: true },
    89: { derivative: true },
    103: { derivative: true },
  },
};

export default spells;
