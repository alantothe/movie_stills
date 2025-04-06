"use client";
import { useQuery } from "@tanstack/react-query";
import getMovie from "./api/getMovie";
const MoviePage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["oneMovie"],
    queryFn: () => getMovie("fight-club"),
  });
  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;
  console.log(data);
  return <div></div>;
};

export default MoviePage;
