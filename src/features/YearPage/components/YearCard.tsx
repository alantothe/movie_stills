import Link from "next/link";
type YearCardProps = {
  year: number;
};


const YearCard = ({ year }: YearCardProps) => {
  return (
    <div>
      <Link href={`/filter/years/${year}`}>
         <h1>{year}</h1>
      </Link>
    </div>
  );
};

export default YearCard;
