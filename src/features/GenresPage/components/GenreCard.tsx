import Link from "next/link";

type GenreCardProp = {
  genre: string;
};

const GenreCard = ({ genre }: GenreCardProp) => {
  return (
    <div className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg transition hover:scale-[1.02] hover:shadow-xl">
      <Link
        href={`filter/genres/${genre.toLowerCase()}`}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide group-hover:scale-105 group-hover:text-blue-400 transition-all duration-300">
          {genre}
        </h1>
      </Link>
    </div>
  );
};

export default GenreCard;
