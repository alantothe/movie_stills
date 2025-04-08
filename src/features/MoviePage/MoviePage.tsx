"use client";
import { useQuery } from "@tanstack/react-query";
import getMovie from "./api/getMovie";
import TitleImageInfo from "./components/TitleImageInfo";
import AllStills from "./components/AllStills/AllStills";
import Fancybox from "@/hooks/Fancy";
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
        <div className="px-3">
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
                        <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
          Toolbar: {
            display: {
              left: ["infobar"],
              middle: ["zoomIn", "zoomOut"],
              right: ["slideshow", "thumbs", "close"],
            },
          },
        }}
          >
            
          <AllStills stills={data.stills} />
      </Fancybox>
        </div>
      ) : null}
    </div>
  );
};

export default MoviePage;
