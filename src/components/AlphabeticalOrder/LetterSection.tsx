import { SingleMovieProps } from "@/utils/types";
import Link from "next/link";
type LetterProps = {
  letter: string | number;
  names: SingleMovieProps[];
};

const LetterSection = ({ letter, names }: LetterProps) => {
  return (
    <div>
      <h1>{letter}</h1>
      <ul>
        {names.map((value) => (
          <Link key={value.title} href={`/movie/${value.slug}`}>
            <li>{value.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LetterSection;
