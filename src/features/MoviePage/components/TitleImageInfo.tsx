import Image from "next/image";
import Link from "next/link";

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

function separateString(string: string) {
  return string.split(", ");
}
const InfoSection = ({ info }: InfoProps) => {
  const separatedGenres: string[] = separateString(info.genre);
  const separatedDirectors: string[] = separateString(info.director);
  const separatedCountries: string[] = separateString(info.country);

  return (
    <div className="mt-6 grid gap-3 text-sm sm:text-base text-gray-300 tracking-wide">
      <h2>
        Director:{" "}
        {separatedDirectors.map((director) => (
          <Link
            key={director}
            href={`/filter/directors/${director
              .replace(/ /g, "-")
              .toLowerCase()}`}
            className="hover:underline hover:text-blue-400 transition"
          >
            {director}{" "}
          </Link>
        ))}
      </h2>
      <h2>
        Origin Country:{" "}
        {separatedCountries.map((country) => (
          <Link
            key={country}
            href={`/filter/countries/${country
              .replace(/ /g, "-")
              .toLowerCase()}`}
            className="hover:underline hover:text-blue-400 transition"
          >
            {country}{" "}
          </Link>
        ))}
      </h2>
      <h2>
        Genre:{" "}
        {separatedGenres.map((genre) => (
          <Link
            key={genre}
            href={`/filter/genres/${genre.replace(/ /g, "-").toLowerCase()}`}
            className="hover:underline hover:text-blue-400 transition"
          >
            {genre}{" "}
          </Link>
        ))}
      </h2>
      <h2>
        Release Year:{" "}
        <Link
          href={`/filter/years/${info.date_released.slice(0, 4)}`}
          className="hover:underline hover:text-blue-400 transition"
        >
          {info.date_released.slice(0, 4)}
        </Link>
      </h2>
      <h2>
        Rating: <span className="text-white font-medium">{info.rating}</span>
      </h2>
    </div>
  );
};

const TitleImageInfo = ({ title, imageUrl, info }: TitleImageInfoProps) => {
  return (
    <div className="px-5 sm:px-30 md:px-40px py-8">
      <h1 className="text-center text-xl sm:text-4xl font-light text-white tracking-wide mb-6">
        {title}
      </h1>

      <div className="overflow-hidden shadow-lg mb-6">
        <Image
          className="w-full h-auto object-cover transition-transform duration-300"
          alt={title}
          src={imageUrl}
          width={1200}
          height={800}
        />
      </div>

      <InfoSection info={info} />
    </div>
  );
};

export default TitleImageInfo;
