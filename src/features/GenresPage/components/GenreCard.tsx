type GenreCardProp = {
  genre: string;
};

const GenreCard = ({ genre }: GenreCardProp) => {
  return (
    <div className="bg-gray-900">
      <h1 className="">{genre}</h1>
    </div>
  );
};

export default GenreCard;
