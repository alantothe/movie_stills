import { Movie } from "../types";

export async function fetchMovies(): Promise<Movie[]> {
  const response = await fetch("http://localhost:8081/movies/");
  return response.json();
}