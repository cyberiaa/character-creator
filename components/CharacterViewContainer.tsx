import "server-only";
import {
  characterSection,
  characterWrapper,
} from "./CharacterViewContainer.css";
import { CharacterView } from "./CharacterView";

export function CharacterViewContainer() {
  return (
    <section className={characterSection}>
      <div className={characterWrapper}>
        <CharacterView />
      </div>
    </section>
  );
}
