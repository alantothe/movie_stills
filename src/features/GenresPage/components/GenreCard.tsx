import Link from "next/link";

type GenreCardProp = {
  genre: string;
};

const GenreCard = ({ genre }: GenreCardProp) => {
  return (
    <div className="bg-gray-900 h-36 flex items-center justify-center">
      <Link href={`filter/genres/${genre.toLowerCase()}`}>
        <h1 className="text-center">{genre}</h1>
      </Link>
    </div>
  );
};

export default GenreCard;
