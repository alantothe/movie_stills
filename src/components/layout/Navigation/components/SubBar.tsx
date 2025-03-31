import Link from "next/link";
type SubBarProps = {
    screenWidth: number;
    setToggle : () => void
};

const SubBar = ({ screenWidth, setToggle }: SubBarProps) => {
  let styles = "";
  if (screenWidth > 980) {
    styles = "flex flex-row justify-evenly";
  } else {
    styles = "flex flex-col";
  }


  return (
    <div className="bg-black">
      <ul className={`flex ${styles}`}>
        <li className="cursor-pointer hover:text-gray-400 transition-colors" key="films" onClick={setToggle}>
          <Link href="/alphabetically">Films A-Z</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-colors" key="directors" onClick={setToggle}>
          <Link href="/directors">Browse By Director</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-colors" key="countries" onClick={setToggle}>
          <Link href="/country">Origin Country</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-colors" key="genres" onClick={setToggle}>
          <Link href="/genres">Genres</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400 transition-colors" key="years" onClick={setToggle}>
          <Link href="/year">Years</Link>
        </li>
      </ul>
    </div>
  );
};

export default SubBar;
