import Image from "next/image";

type CountryCardProps = {
  country: string;
  url: string;
};

const CountryCard = ({ country, url }: CountryCardProps) => {
  return (
      <div className="w-full h-full">
          <Image
              className="w-full h-full object-cover"
              alt={country} src={url} width={400} height={300} />
          {/* <h1>{country}</h1> */}
    </div>
  );
};

export default CountryCard;
