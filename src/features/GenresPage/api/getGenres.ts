type dataType = {
  genre: string;
};
export default async function getGenres(): Promise<string[]> {
  const response = await fetch("http://localhost:8081/only/genres/");

  const data = await response.json();

  const genres: string[] = data.flatMap((value: dataType) => {
    const arr = value.genre.split(", ");
    return arr;
  });

  const genresSet = new Set(genres);
  const filteredGenres = [...genresSet];
  return filteredGenres;
}
