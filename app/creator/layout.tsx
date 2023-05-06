import "server-only";

import { section, appContainer } from "./layout.css";
import Link from "next/link";
import { CharacterViewContainer } from "@/components/CharacterViewContainer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <div>
        <button>
          <Link href={"/creator/monolith"}>Monolith</Link>
        </button>
        <br />
        <button>
          <Link href={"/creator/astronaut"}>Astronaut</Link>
        </button>
      </div>

      <main className={appContainer}>
        {/* Character Viewer */}
        <CharacterViewContainer />
        {/* Trait Selector */}
        <section className={section}>{children}</section>;
      </main>
    </div>
  );
}
