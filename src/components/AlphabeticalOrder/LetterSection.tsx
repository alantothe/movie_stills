import Link from "next/link";
//generics - revisit this 
type LetterProps<T> = {
  letter: string | number;
  names: T[];
};

const LetterSection = <T extends string | { title: string; slug: string }>({
  letter,
  names,
}: LetterProps<T>) => {
  return (
    <div>
      <h1>{letter}</h1>
      <ul>
        {names.map((value, index) => {
          if (typeof value === "string") {
            return <li key={index}>{value}</li>;
          } else {
            return (
              <Link key={value.slug} href={`/movie/${value.slug}`}>
                <li>{value.title}</li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default LetterSection;
