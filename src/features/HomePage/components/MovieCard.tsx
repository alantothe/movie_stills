import Image from "next/image";
import { MovieFiltered } from "../types";
import Link from "next/link";
const MovieCard = ({ movie }: { movie: MovieFiltered }) => {
  return (
    <div className="w-full h-full">
      <Link href={`/movie/${movie.slug}`}>
        <Image
          className="rounded-2xl w-full h-full object-cover"
          alt={movie.title}
          src={movie.stills[12].image_url}
          width={300}
          height={450}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
