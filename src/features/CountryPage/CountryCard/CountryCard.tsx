import Image from "next/image";
import Link from "next/link";
import { capitalizeWords } from "@/utils/capitalizeWords";
type CountryCardProps = {
  country: string;
  url: string;
};

function filterCountry(string: string) {
  if (string === "usa") return "united-states";
  if (string === "united kingdom of great britain and northern ireland")
    return "united-kingdom";
  return string;
}

const CountryCard = ({ country, url }: CountryCardProps) => {
  const filteredCountry = filterCountry(country);
  const countryCapitalized = capitalizeWords(filteredCountry)
  return (
    <div className="relative w-full h-full group overflow-hidden rounded-xl shadow-lg opacity-75">
      <Link href={`/filter/countries/${filteredCountry.toLowerCase()}`}>
        <Image
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
          alt={country}
          src={url}
          width={400}
          height={300}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        {/* Country Text */}
        <div className="absolute bottom-4 left-4 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300 drop-shadow-md">
          {countryCapitalized}
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
