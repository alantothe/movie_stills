"use client";
import LogoBar from "./components/LogoBar";
import SubBar from "./components/SubBar";
import { useState, useEffect } from "react";


const NavBar = () => {
  const [toggleSubBar, setToggleSubBar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);



  useEffect(() => {

    const handleWindowResize = () => setScreenWidth(window.innerWidth);
    // Set initial screen width
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    //close the eventlistener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
  if (screenWidth > 980 && toggleSubBar) {
    setToggleSubBar(false);
  }
}, [screenWidth, toggleSubBar]);


  const handleSubBarClick = () => {
    if (toggleSubBar) {
      return setToggleSubBar(false);
    } else return setToggleSubBar(true);
  };

  return (
    <div>
      <LogoBar
        screenWidth={screenWidth}
        currentToggle={toggleSubBar}
        setToggle={handleSubBarClick}
      />
      {screenWidth > 980 ? (
        <SubBar screenWidth={screenWidth} setToggle={handleSubBarClick} />
      ) : toggleSubBar ? (
        <SubBar screenWidth={screenWidth} setToggle={handleSubBarClick} />
      ) : null}
    </div>
  );
};
export default NavBar;
