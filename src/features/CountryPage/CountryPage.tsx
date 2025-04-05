"use client";
import getCountriesFlag from "./api/countryApi";
import CountryCard from "./CountryCard/CountryCard";
import { useQuery } from "@tanstack/react-query";
const CountryPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["flags"],
    queryFn: getCountriesFlag,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;
  console.log(data);
  return (
    <div className="w-full px-10 grid grid-cols-1 gap-4 place-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((country) => (
        <div key={country.country}>
          <CountryCard country={country.country} url={country.url} />
        </div>
      ))}
    </div>
  );
};

export default CountryPage;
