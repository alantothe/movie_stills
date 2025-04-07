import { Movie } from "@/utils/types";
import {
  SingleStillMovieFiltered,
  LookupFunction,
  filterFnProps,
} from "@/utils/types";

async function getDirectorByName(
  name: string
): Promise<SingleStillMovieFiltered[]> {
  const response = await fetch(`http://localhost:8081/directors/${name}`);
  const data = await response.json();
  const singleMovieArr = data.map((movie: Movie) => {
    const { imdb_id, title, slug, stills } = movie;
    return {
      imdb_id: imdb_id,
      title: title,
      slug: slug,
      stills: stills[6].image_url,
    };
  });

  return singleMovieArr;
}

async function getGenreByName(
  name: string
): Promise<SingleStillMovieFiltered[]> {
  const response = await fetch(`http://localhost:8081/genres/${name}`);
  const data = await response.json();
  const singleMovieArr = data.map((movie: Movie) => {
    const { imdb_id, title, slug, stills } = movie;
    return {
      imdb_id: imdb_id,
      title: title,
      slug: slug,
      stills: stills[6].image_url,
    };
  });

  return singleMovieArr;
}

async function getYearByYear(
  name: string
): Promise<SingleStillMovieFiltered[]> {
  const response = await fetch(`http://localhost:8081/years/${name}`);
  const data = await response.json();
  const singleMovieArr = data.map((movie: Movie) => {
    const { imdb_id, title, slug, stills } = movie;
    return {
      imdb_id: imdb_id,
      title: title,
      slug: slug,
      stills: stills[6].image_url,
    };
  });

  return singleMovieArr;
}

async function getCountryByName(
  name: string
): Promise<SingleStillMovieFiltered[]> {
  const response = await fetch(`http://localhost:8081/countries/${name}`);
  const data = await response.json();
  const singleMovieArr = data.map((movie: Movie) => {
    const { imdb_id, title, slug, stills } = movie;
    return {
      imdb_id: imdb_id,
      title: title,
      slug: slug,
      stills: stills[6].image_url,
    };
  });

  return singleMovieArr;
}

const functionMap: Map<string, LookupFunction> = new Map();

functionMap.set("directors", getDirectorByName);
functionMap.set("genres", getGenreByName);
functionMap.set("years", getYearByYear);
functionMap.set("countries", getCountryByName);

function filterFn({ type }: filterFnProps): LookupFunction | undefined {
  return functionMap.get(type);
}

export default filterFn;
