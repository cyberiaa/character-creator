import { create } from "zustand";

export type Characters = "Monolith" | "Astronaut";

type TraitActions = {
  // selectedCharacter?: Characters;
  selectedMonolithTraits: Array<string>;
  selectedAstronautTraits: Array<string>;
  // setSelectedCharacter: (character: Characters) => void;
  setSelectedMonolithTraits: (traits: Array<string>) => void;
  setSelectedAstronautTraits: (traits: Array<string>) => void;
  getSelectedTraits: (character: Characters) => Array<string>;
};

export const useTraits = create<TraitActions>((set, get) => ({
  // selectedCharacter: "Monolith",
  selectedMonolithTraits: [
    "Head1-black",
    "Body1-black",
    "Legs1-black",
    "Arms1-black",
  ],
  selectedAstronautTraits: [
    "Head2-black",
    "Body2-black",
    "Legs2-black",
    "Arms2-black",
  ],

  // setSelectedCharacter: (character) => set({ selectedCharacter: character }),
  setSelectedMonolithTraits: (traits) =>
    set({ selectedMonolithTraits: traits }),
  setSelectedAstronautTraits: (traits) =>
    set({ selectedAstronautTraits: traits }),
  getSelectedTraits: (character) => {
    const { selectedMonolithTraits, selectedAstronautTraits } = get();
    return character === "Monolith"
      ? selectedMonolithTraits
      : selectedAstronautTraits;
  },
}));
