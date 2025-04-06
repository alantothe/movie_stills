import { Movie } from "../../../utils/types";
import { MovieFiltered } from "../../../utils/types";
export async function fetchMovies(): Promise<MovieFiltered[]> {
  const response = await fetch("http://localhost:8081/movies/");
  const data = await response.json();
  const filteredData: MovieFiltered[] = data.map((movie: Movie) => {
    const { imdb_id, title, slug, stills } = movie;
    return {
      imdb_id,
      title,
      slug,
      stills,
    };
  });
  return filteredData;
}
