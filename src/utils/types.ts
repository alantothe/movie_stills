

export type SingleMovieProps = {
  title: string
  slug: string
}

export type TitlesProps = {
  letter: string | number;
  titles: SingleMovieProps[];
};

export type LookupFunction = (name: string) => Promise<SingleStillMovieFiltered[]>;

export type LookupFunctionMap = Map<string, LookupFunction>;

export type SingleStillMovieFiltered = {
  imdb_id: string;
  title: string;
  slug: string;
  stills: string;
};

export type Still = {
  id: number;
  image_url: string;
  imdb_id: string;
};
export type Movie = {
  imdb_id: string;
  title: string;
  slug: string
  date_released: string;
  genre: string;
  rating: string;
  director: string;
  country: string;
  imdb_rating: string;
  stills: Still[];
};
export type MovieFiltered = {
  imdb_id: string;
  title: string;
  slug: string;
  stills: Still[];
};