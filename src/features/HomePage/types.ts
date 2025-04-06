type Still = {
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