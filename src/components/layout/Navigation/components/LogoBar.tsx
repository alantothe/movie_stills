"use client";



type LogoBarProps = {
  currentToggle: boolean;
  setToggle: () => void;
  screenWidth: number;
};

const LogoBar = ({ setToggle, screenWidth, currentToggle }: LogoBarProps) => {

  return (
    <div className="bg-black h-12 flex">
      <h1 
        className={`text-2xl ${
          screenWidth > 460 ? 'flex-1 text-center' : 'flex-none'
        }`}
      >
        {"[mise-en-scene]"}
      </h1>
      {screenWidth < 980 ? (
        <h1 className="font-extrabold text-2xl" onClick={setToggle}>
          {!currentToggle ? "+" : "-"}
        </h1>
      ) : null}
    </div>
  );
};

export default LogoBar;
