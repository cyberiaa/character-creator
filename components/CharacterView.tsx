"use client";

import "client-only";
import { useState, useEffect } from "react";
import { useTraits, Characters } from "@/store/store";
import { usePathname } from "next/navigation";

function getCharacterName(pathname: string): Characters {
  switch (pathname) {
    case "/creator/monolith":
      return "Monolith";
    case "/creator/astronaut":
      return "Astronaut";
    default:
      return "Monolith";
  }
}

export function CharacterView() {
  const getSelectedTraits = useTraits((state) => state.getSelectedTraits);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const pathname = usePathname();
  const character = getCharacterName(pathname);

  useEffect(() => {
    setSelectedTraits(getSelectedTraits(character));
  }, [character, getSelectedTraits]);

  console.log("selectedTraits", selectedTraits);

  return (
    <>
      {selectedTraits.map((trait) => (
        <div key={trait}>{trait}</div>
      ))}
    </>
  );
}
