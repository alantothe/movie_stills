
import { alphabetMap } from "../alphabetMap";

type DirectorOnlyProps = {
  letter: string;
  names: string[];
};


export default async function fetchDirectors(): Promise<DirectorOnlyProps[]> {
    const response = await fetch("http://localhost:8081/only/directors/");

    const data = await response.json();

    for (const value of data) {
      const firstLetter = value.director[0];
      if (alphabetMap.has(firstLetter)) {
        alphabetMap.get(firstLetter)?.push(value.director);
      }
    }
    return Array.from(alphabetMap.entries()).map(([letter, names]) => ({
      letter,
      names,
    }));
  }