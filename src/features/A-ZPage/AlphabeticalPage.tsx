"use client"
import { alphabetMap } from "./array";
import { useQuery } from "@tanstack/react-query";

type DirectorOnlyProps = {
  director: string;
};
// you must filter the response with filter() and return an array of objects/map the looks like this  
// {
// letter: string,
//  names: string[]
//}
const AlphabeticalPage = () => {
  async function fetchDirectors(): Promise<DirectorOnlyProps[]> {
    const response = await fetch("http://localhost:8081/only/directors/");

      

    return response.json();
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["allDirectors"],
    queryFn: fetchDirectors,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error : {isError}</p>;
  console.log(data);

  return (
    <div>
      {/* {alphabet.map((letter) => (
        <div key={letter}>
              <h1 className="text-4xl font-bold">{letter}</h1>
              
        </div>
      ))} */}
    </div>
  );
};

export default AlphabeticalPage;
