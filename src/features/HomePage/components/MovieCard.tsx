import Image from "next/image";
import { BaseMovie, Still } from "../../../utils/types";
import Link from "next/link";

type MovieCardProps<T extends string | Still[]> = {
  movie: BaseMovie<T>;
};
const MovieCard = <T extends string | Still[]>({
  movie,
}: MovieCardProps<T>) => {
  const imageUrl =
    typeof movie.stills === "string"
      ? movie.stills
      : movie.stills[12]?.image_url || "/fallback.jpg";
  return (
    <div className="w-full h-full">
      <Link href={`/movie/${movie.slug}`}>
        <Image
          className="rounded-2xl w-full h-full object-cover"
          alt={movie.title}
          src={imageUrl}
          width={2000}
          height={2000}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
