type Still = {
  id: number;
  image_url: string;
  imdb_id: string;
}

type MovieProps = {
  imdb_id: string;
  title: string;
  slug: string;
  date_released: string;
  genre: string;
  rating: string;
  director: string;
  country: string;
  imdb_rating: string;
  stills: Still[];
}

export default async function getMovie (params : string): Promise<MovieProps> {
    const response = await fetch(`http://localhost:8081/titles/${params}/`)
    const data: MovieProps[] = await response.json()
    return data[0]
}