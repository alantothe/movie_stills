"use client"
import getTitles from "./api/getTitles";
import { useQuery } from "@tanstack/react-query";
import LetterSection from "@/components/AlphabeticalOrder/LetterSection";
const AZPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getTitles"],
    queryFn: getTitles,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error : {isError}</p>;

  return (
    <div>
      <ul>
        {data?.map((titles) => (
          <li key={titles.letter}>
            <LetterSection letter={titles.letter} names={titles.titles} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AZPage;
