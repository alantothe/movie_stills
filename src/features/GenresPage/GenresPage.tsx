"use client";
import { useQuery } from "@tanstack/react-query";
import getGenres from "./api/getGenres";
import GenreCard from "./components/GenreCard";
const GenresPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allGenres"],
    queryFn: getGenres,
  });
  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>is Error...</p>;
  return (
    <div className="grid grid-cols-1 gap-5 px-10 sm:grid-cols-2 md:grid-cols-3 ">
      {data?.map((genre) => (
        <div  key={genre}>
          <GenreCard genre={genre} />
        </div>
      ))}
    </div>
  );
};

export default GenresPage;

