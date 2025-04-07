"use client";

import filterFn from "./api/apiConfig";
import { FilterPageResultsProps } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import MasonryLayout from "./components/MasonryLayout";
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
  console.log(data);
    return <div>
      <MasonryLayout movies={data!}/>
  </div>;
};

export default FilterPageResults;
