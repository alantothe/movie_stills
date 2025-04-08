import Link from "next/link";

type SubBarProps = {
  screenWidth: number;
  setToggle: () => void;
};

const SubBar = ({ screenWidth, setToggle }: SubBarProps) => {
  const isDesktop = screenWidth > 980;

  return (
    <div className="bg-black w-full border-t-gray-800">
      <ul
        className={`${
          isDesktop ? "flex-row justify-evenly py-4" : "flex-col py-2"
        } flex w-full items-center text-center gap-2 sm:gap-4`}
      >
        {[
          { label: "[Films A-Z]", href: "/alphabetically" },
          { label: "[Browse By Director]", href: "/directors" },
          { label: "[Origin Country]", href: "/country" },
          { label: "[Genres]", href: "/genres" },
          { label: "[Years]", href: "/year" },
        ].map(({ label, href }) => (
          <li
            key={label}
            className="cursor-pointer px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200 tracking-wide"
            onClick={setToggle}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubBar;
