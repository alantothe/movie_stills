import Image from "next/image";
type TitleImageInfoProps = {
  title: string;
  imageUrl: string;
};
const TitleImageInfo = ({ title, imageUrl }: TitleImageInfoProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image alt={title} src={imageUrl} width={600} height={300}></Image>
    </div>
  );
};

export default TitleImageInfo;
