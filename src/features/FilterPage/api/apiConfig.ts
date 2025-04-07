// filter/[director]/[name]
// filter/[genre]/[name]
// filter/[country]/[name]
// filter/[year]/[name]
// import Directors from "@/app/directors/page";
import { Movie } from "@/utils/types";

import { SingleStillMovieFiltered, LookupFunction } from "@/utils/types";

async function getDirectorByName(name: string): Promise<SingleStillMovieFiltered[]> {
  const response = await fetch(`http://localhost:8081/directors/${name}`);
    const data = await response.json();
    console.log(response)
    const singleMovieArr = data.map((movie : Movie ) => {
        const { imdb_id, title, slug, stills } = movie
        return {
            imdb_id: imdb_id,
            title: title,
            slug: slug,
            stills: stills[6].image_url
        }
    })

  return singleMovieArr;
}
//  async function getGenreByName(name: string): Promise<Movie[]> {
//   const response = await fetch(`http://localhost:8081/genres/${name}`);
//   const data = await response.json();

//   return data;
// }
//  async function getYearByYear(name: string): Promise<Movie[]> {
//   const response = await fetch(`http://localhost:8081/years/${name}`);
//   const data = await response.json();

//   return data;
// }
//  async function getCountryByName(name: string): Promise<Movie[]> {
//   const response = await fetch(`http://localhost:8081/countries/${name}`);
//   const data = await response.json();

//   return data;
//  }



const functionMap: Map<string, LookupFunction> = new Map();

functionMap.set("directors", getDirectorByName)
// functionMap.set("genres", getGenreByName)
// functionMap.set("years", getYearByYear)
// functionMap.set("countries", getCountryByName)



export default functionMap