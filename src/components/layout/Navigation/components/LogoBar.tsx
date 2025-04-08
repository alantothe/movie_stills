"use client";

import Link from "next/link";

type LogoBarProps = {
  currentToggle: boolean;
  setToggle: () => void;
  screenWidth: number;
};

const LogoBar = ({ setToggle, screenWidth, currentToggle }: LogoBarProps) => {
  return (
    <div
      className={`bg-black flex items-center ${
        screenWidth <= 460 ? "justify-between" : "justify-center"
      } px-4 py-3 shadow-md`}
    >
      <h1
        className={`font-light tracking-widest transition-all duration-300 ${
          screenWidth <= 460
            ? "text-xl"
            : screenWidth <= 768
            ? "text-2xl"
            : "text-3xl"
        }`}
      >
        <Link href={`/`} className="text-white hover:text-blue-400">
          {"[mise-en-scene]"}
        </Link>
      </h1>

      {screenWidth < 980 && (
        <button
          className="text-white text-3xl font-bold ml-auto hover:text-blue-400 transition"
          onClick={setToggle}
          aria-label="Toggle Menu"
        >
          {currentToggle ? "×" : "+"}
        </button>
      )}
    </div>
  );
};

export default LogoBar;
