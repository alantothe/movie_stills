import Image from "next/image";
type InfoProps = {
  info: {
    director: string;
    country: string;
    genre: string;
    date_released: string;
    rating: string;
  };
};

type TitleImageInfoProps = {
  title: string;
  imageUrl: string;
  info: {
    director: string;
    country: string;
    genre: string;
    date_released: string;
    rating: string;
  };
};




const InfoSection = ({ info }: InfoProps) => {
  return (
    <div>
          <h1>Director : {info.director}</h1>
          <h1>Origin Country : {info.country}</h1>
          <h1>Genre : {info.genre}</h1>
          <h1>Release Year : {info.date_released}</h1>
          <h1>Rating : {info.rating}</h1>
    </div>
  );
};

const TitleImageInfo = ({ title, imageUrl, info }: TitleImageInfoProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image className="w-full h-full object-cover" alt={title} src={imageUrl} width={1000} height={1000}></Image>
      <InfoSection info={info} />
    </div>
  );
};

export default TitleImageInfo;
