import Image from "next/image";
import { BaseMovie, Still } from "../../../utils/types";
import Link from "next/link";

type MovieCardProps<T extends string | Still[]> = {
  movie: BaseMovie<T>;
};

const MovieCard = <T extends string | Still[]>({ movie }: MovieCardProps<T>) => {
  const imageUrl =
    typeof movie.stills === "string"
      ? movie.stills
      : movie.stills[12]?.image_url || "/fallback.jpg";

  return (
    <div className="relative w-full h-full group overflow-hidden rounded-2xl shadow-lg">
      <Link href={`/movie/${movie.slug}`}>
        {/* Image */}
        <Image
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
          alt={movie.title}
          src={imageUrl}
          width={2000}
          height={2000}
        />

        {/* Title */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center p-4">
          <h2 className="text-white text-center text-lg sm:text-xl font-light tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-300 ease-out">
            {movie.title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
