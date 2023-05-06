import "server-only";
import { traitsContainer } from "./CharacterTraits.css"; // Styles
import { Attributes, Attribute } from "@/utils/types"; // Types
import { CharacterTraitItem } from "./CharacterTraitItem";

interface Props {
  character: string;
  attributes: Attributes[];
}

export default function CharacterTraits({ character, attributes }: Props) {
  return (
    <>
      <h1>{character}</h1>
      {attributes.map((attributeType: Attributes, index: number) => {
        return (
          <div key={index}>
            <h2>{attributeType.key}</h2>
            <div className={traitsContainer}>
              {attributeType.attributes.map(
                (attribute: Attribute, index: number) => {
                  return (
                    <CharacterTraitItem key={index} attribute={attribute} />
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
