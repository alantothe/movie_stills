//from server

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

//props

export type SingleMovieProps = {
  title: string
  slug: string
}

export type TitleProps = {
  letter: string | number;
  titles: SingleMovieProps[];
};

export type DirectorOnlyProps = {
  letter: string;
  names: string[];
};

export type FilterPageResultsProps = {
  type: string;
  slug: string;
};

export type filterFnProps = {
  type: string;
};

//maps / functions
export type LookupFunction = (name: string) => Promise<SingleStillMovieFiltered[]>;

export type LookupFunctionMap = Map<string, LookupFunction>;




//generics 

export type BaseMovie<T> = {
  imdb_id: string;
  title: string;
  slug: string;
  stills: T;
};

export type SingleStillMovieFiltered = BaseMovie<string>;

export type MovieFiltered = BaseMovie<Still[]>;
