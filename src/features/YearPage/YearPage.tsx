"use client";

import { useQuery } from "@tanstack/react-query";
import getYears from "./api/getYears";
const YearPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["years"],
    queryFn: getYears,
  });
  if (isLoading) return <p>... is Loading</p>;
  if (isError) return <p>Error: {isError}</p>;
  console.log(data);
  return <div></div>;
};

export default YearPage;
