"use client";

import { useQuery } from "@tanstack/react-query";
import { Movie } from "./types";

async function fetchMovies(): Promise<Movie[]> {
  const response = await fetch("http://localhost:8081/movies/");
  return response.json();
}

const HomePage = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["allMovies"],
    queryFn: fetchMovies,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p> Error : {isError}</p>;

  console.log(data);

  return <div>Hello</div>;
};

export default HomePage;
