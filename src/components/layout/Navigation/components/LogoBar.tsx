"use client";

import Link from "next/link";
type LogoBarProps = {
  currentToggle: boolean;
  setToggle: () => void;
  screenWidth: number;
};

const LogoBar = ({ setToggle, screenWidth, currentToggle }: LogoBarProps) => {

  return (
    <div className={`bg-black flex ${screenWidth <= 460 ? 'justify-between' : ''}`}>
      
            <h1 
        className={`text-xl pl-2 py-3 text-wrap ${
          screenWidth > 460 ? 'flex-1 text-center' : ''
        }`}
      >
        <Link href={`/`}>
        
        {"[mise-en-scene]"}
        </Link>
      </h1>

      {screenWidth < 980 ? (
        <h1 className="font-extrabold text-2xl" onClick={setToggle}>
          {!currentToggle ? "+" : "x"}
        </h1>
      ) : null}
    </div>
  );
};

export default LogoBar;
