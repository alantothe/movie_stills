import Image from "next/image";
import Link from "next/link";
type CountryCardProps = {
  country: string;
  url: string;
};

function filterCountry(string : string) {
  if (string === "usa") return "united-states"
  if(string ==="united kingdom of great britain and northern ireland") return "united-kingdom"
  return string
}

const CountryCard = ({ country, url }: CountryCardProps) => {
  const filteredCountry = filterCountry(country)
  return (
      <div className="w-full h-full">
      <Link href={`/filter/countries/${filteredCountry.toLowerCase()}`}>
                <Image
              className="w-full h-full object-cover"
              alt={country} src={url} width={400} height={300} />
      </Link>
    </div>
  );
};

export default CountryCard;
