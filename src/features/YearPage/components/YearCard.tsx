import Link from "next/link";
type YearCardProps = {
  year: number;
};

const YearCard = ({ year }: YearCardProps) => {
  return (
    <div className="group hover:underline hover:text-blue-400 relative aspect-[3/2] overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg transition hover:scale-[1.02] hover:shadow-xl">
      <Link
        className="absolute inset-0 flex items-center justify-center"
        href={`/filter/years/${year}`}
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide group-hover:scale-105 group-hover:text-blue-400 transition-all duration-300">
          {year}
        </h1>
      </Link>
    </div>
  );
};

export default YearCard;
