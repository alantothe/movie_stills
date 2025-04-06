"use client";
import { useQuery } from "@tanstack/react-query";
import getMovie from "./api/getMovie";
import TitleImageInfo from "./components/TitleImageInfo";
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
  console.log(data?.slug);
  return (
    <div>
      {data ? (
        <TitleImageInfo
          title={data.title}
          imageUrl={data.stills[0].image_url}
        />
      ) : null}
    </div>
  );
};

export default MoviePage;
