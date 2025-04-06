"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "./api/fetchMovies";
import MasonryLayout from "./components/MasonryLayout";
const HomePage = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["allMovies"],
    queryFn: fetchMovies,
  });
  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p> Error : {isError}</p>;
  return (
    <div className="flex-1 items-center">
      <MasonryLayout data={data!} />
    </div>
  );
};

export default HomePage;
