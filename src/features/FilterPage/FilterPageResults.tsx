"use client";

import filterFn from "./api/apiConfig";
import { FilterPageResultsProps } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import MasonryLayout from "./components/MasonryLayout";
import { capitalizeWords } from "@/utils/capitalizeWords";

const FilterPageResults = ({ type, slug }: FilterPageResultsProps) => {
  const fn = filterFn({ type });
  if (!fn) {
    notFound();
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["filterQuery"],
    queryFn: () => fn(slug),
  });
  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p> Error : {isError}</p>;

  const newSlug = capitalizeWords(slug);

  console.log(newSlug);

  return (
    <div>
      <h1 className="px-10 text-center">{newSlug} Films :</h1>
      <MasonryLayout movies={data!} />
    </div>
  );
};

export default FilterPageResults;
