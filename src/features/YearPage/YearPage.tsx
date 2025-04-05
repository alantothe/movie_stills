"use client";

import { useQuery } from "@tanstack/react-query";
import YearCard from "./components/YearCard";
import getYears from "./api/getYears";
const YearPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["years"],
    queryFn: getYears,
  });
  if (isLoading) return <p>... is Loading</p>;
  if (isError) return <p>Error: {isError}</p>;
    return <div className="grid grid-cols-1 mx-5 text-center sm:grid-cols-2 md:grid-cols-3">
      
        {data?.map((year) => (
            <div key={year}>
                <YearCard year={year}/>
            </div>
        ))}
  </div>;
};

export default YearPage;
