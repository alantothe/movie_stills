"use client"

import functionMap from "./api/apiConfig";
import { LookupFunctionMap, LookupFunction } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
type FilterPageResultsProps = {
  type: string;
  slug: string;
};

type filterFnProps = {
  type: string;
  functionMap: LookupFunctionMap;
};
function filterFn({
  type,
  functionMap,
}: filterFnProps): LookupFunction | undefined {
  return functionMap.get(type);
}

const FilterPageResults = ({ type, slug }: FilterPageResultsProps) => {
  const fn = filterFn({ type, functionMap });
  if (!fn) {
    throw new Error(`No function found for type: ${type}`);
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["filterQuery"],
    queryFn: () => fn(slug),
  });
  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p> Error : {isError}</p>;
  console.log(data);
  return <div></div>;
};

export default FilterPageResults;
