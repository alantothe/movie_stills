import Link from "next/link";

type GenreCardProp = {
  genre: string;
};

const GenreCard = ({ genre }: GenreCardProp) => {
  return (
    <div className="bg-gray-900">
      <Link href={`filter/genres/${genre.toLowerCase()}`}>
        <h1 className="">{genre}</h1>
      </Link>
    </div>
  );
};

export default GenreCard;
