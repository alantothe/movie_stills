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
    <div className="mb-8">
      <h1 className="  text-4xl sm:text-5xl font-bold text-white mb-6 tracking-wide drop-shadow">
        {letter}
      </h1>
      <ul className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 list-disc list-inside text-gray-200">
        {names.map((value, index) => {
          if (typeof value === "string") {
            const dashValue = value.replace(/ /g, "-").toLowerCase();
            return (
              <li key={index}>
                <Link
                  href={`/filter/directors/${dashValue}`}
                  className="hover:underline hover:text-blue-400 transition"
                >
                  {value}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={value.slug}>
                <Link
                  href={`/movie/${value.slug}`}
                  className="hover:underline hover:text-blue-400 transition"
                >
                  {value.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default LetterSection;
