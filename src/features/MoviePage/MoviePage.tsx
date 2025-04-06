"use client";
import { useQuery } from "@tanstack/react-query";
import getMovie from "./api/getMovie";
import TitleImageInfo from "./components/TitleImageInfo";
import AllStills from "./components/AllStills";
type MoviePageProps = {
  slug: string;
};
const MoviePage = ({ slug }: MoviePageProps) => {
  console.log(slug);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["oneMovie", slug],
    queryFn: () => getMovie(slug),
  });
  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;
  return (
    <div>
      {data ? (
        <div>
          <TitleImageInfo
            title={data.title}
            imageUrl={data.stills[0].image_url}
            info={{
              director: data.director,
              country: data.country,
              genre: data.genre,
              date_released: data.date_released,
              rating: data.rating,
            }}
          />
          <AllStills stills={data.stills} />
        </div>
      ) : null}
    </div>
  );
};

export default MoviePage;
