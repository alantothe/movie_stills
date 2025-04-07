import { TitlesProps, SingleMovieProps } from "@/utils/types";

export default async function getTitles(): Promise<TitlesProps[]> {
  const alphabetMap = new Map<string, SingleMovieProps[]>(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .map((letter): [string, SingleMovieProps[]] => [letter, []])
  );

  const response = await fetch("http://localhost:8081/only/titles/");

  const data = await response.json();
  // console.log(data)

  for (const value of data) {
    const firstLetter = value.title[0];
    const singleMovie = {
      title: value.title,
      slug: value.slug
    }
    if (alphabetMap.has(firstLetter)) {
      alphabetMap.get(firstLetter)?.push(singleMovie);
    } else {
      alphabetMap.set(firstLetter, []);
      alphabetMap.get(firstLetter)?.push(singleMovie);
    }
  }

  return Array.from(alphabetMap.entries()).map(([letter, titles]) => ({
    letter,
    titles,
  }));
}


// type TitlesProps = {
//   letter: string | number;
//   titles: string[];
// };

// export default async function getTitles(): Promise<TitlesProps[]> {
//   const alphabetMap = new Map<string, string[]>(
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//       .split("")
//       .map((letter): [string, string[]] => [letter, []])
//   );

//   const response = await fetch("http://localhost:8081/only/titles/");

//   const data = await response.json();
//   // console.log(data)

//   for (const value of data) {
//     const firstLetter = value.title[0];
//     if (alphabetMap.has(firstLetter)) {
//       alphabetMap.get(firstLetter)?.push(value.title);
//     } else {
//       alphabetMap.set(firstLetter, []);
//       alphabetMap.get(firstLetter)?.push(value.title);
//     }
//   }

//   return Array.from(alphabetMap.entries()).map(([letter, titles]) => ({
//     letter,
//     titles,
//   }));
// }
