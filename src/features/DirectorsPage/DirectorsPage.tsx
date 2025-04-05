"use client";
import { useQuery } from "@tanstack/react-query";
import LetterSection from "../../components/AlphabeticalOrder/LetterSection";
import fetchDirectors from "./api/getDirectors";

const DirectorsPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allDirectors"],
    queryFn: fetchDirectors,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error : {isError}</p>;

  return (
    <div>
      {data?.map((letter) => (
        <div key={letter.letter}>
          <LetterSection letter={letter.letter} names={letter.names} />
        </div>
      ))}
    </div>
  );
};

export default DirectorsPage;
