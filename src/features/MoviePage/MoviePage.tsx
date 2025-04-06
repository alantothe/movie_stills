"use client";
import { useQuery } from "@tanstack/react-query";
import getMovie from "./api/getMovie";
type MoviePageProps = {
    params : string
}
const MoviePage = ({params}: MoviePageProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["oneMovie"],
    queryFn: () => getMovie(params),
  });
  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;
  console.log(data);
  return <div></div>;
};

export default MoviePage;
