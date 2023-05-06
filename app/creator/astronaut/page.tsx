import "server-only";
import fs from "fs"; // Reading json
import path from "path"; // Getting json path
import CharacterTraits from "@/components/CharacterTraits"; // Server Component
import { Data } from "@/utils/types"; // Types

// Load data
async function getAstronautData() {
  console.log("process.cwd(): ", process.cwd());
  console.log("__dirname: ", __dirname);
  const filePath = path.join(process.cwd(), "utils/data", "astronaut.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const jsonData = JSON.parse(fileContents);
  return jsonData;
}

// Server Component
export default async function Monolith() {
  const jsonData: Data = await getAstronautData();
  const attributes = jsonData.attributes;
  const character = jsonData.key;

  return <CharacterTraits attributes={attributes} character={character} />;
}
