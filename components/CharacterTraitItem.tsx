"use client";
import "client-only";

import { itemWrapper } from "./CharacterTraitItem.css";
import { useTraits } from "@/store/store";
import { Attribute } from "@/utils/types";

interface Props {
  attribute: Attribute;
}

export const CharacterTraitItem = ({ attribute }: Props) => {
  const selectedMonolithTraits = useTraits(
    (state) => state.selectedMonolithTraits
  );
  const setSelectedMonolithTraits = useTraits(
    (state) => state.setSelectedMonolithTraits
  );

  return (
    <div
      className={itemWrapper}
      onClick={() => {
        setSelectedMonolithTraits([...selectedMonolithTraits, attribute.name]);
      }}
    >
      <p>{attribute.name}</p>
      <p>{attribute.image}</p>
    </div>
  );
};
