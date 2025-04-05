type YearCardProps = {
  year: number;
};

const YearCard = ({ year }: YearCardProps) => {
  return (
    <div>
      <h1>{year}</h1>
    </div>
  );
};

export default YearCard;
