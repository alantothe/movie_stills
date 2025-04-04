"use client";
import { alphabetMap } from "./alphabetMap";
import { useQuery } from "@tanstack/react-query";
import LetterSection from "./LetterSection";

type DirectorOnlyProps = {
  letter: string;
  names: string[];
};
const AlphabeticalPage = () => {
  async function fetchDirectors(): Promise<DirectorOnlyProps[]> {
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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["allDirectors"],
    queryFn: fetchDirectors,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error : {isError}</p>;
  console.log(data);

  return (
    <div>
      {data?.map((letter) => (
        <div key={letter.letter}>
          <LetterSection letter={letter.letter} names={letter.names} />
        </div>
      ))}
    </div>
  );
};

export default AlphabeticalPage;
