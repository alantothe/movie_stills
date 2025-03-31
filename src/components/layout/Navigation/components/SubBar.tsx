type SubBarProps = {
  screenWidth: number;
};

const SubBar = ({ screenWidth }: SubBarProps) => {
  let styles = "";
  if (screenWidth > 980) {
    styles = "flex flex-row justify-evenly";
  } else {
    styles = "flex flex-col";
  }

  return (
    <div>
      <ul className={`flex ${styles}`}>
        <li>Films A-Z</li>
        <li>Browse By Director</li>
        <li>Origin Country</li>
        <li>Genres</li>
        <li>Years</li>
      </ul>
    </div>
  );
};

export default SubBar;
