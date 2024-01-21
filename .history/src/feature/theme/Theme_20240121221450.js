import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbMoonFilled } from "react-icons/tb";
import { HiSun } from "react-icons/hi";
import { changeToggle } from "./themeSlice";
import { PiMoon, PiSunDim } from "react-icons/pi";
function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  // console.log(theme)
  const onSelectMode = (theme) => {
    if (theme === true)
      document.body.classList.add('dark')
    else
      document.body.classList.remove('dark')
  }
  return (
    <div className="w-10 justify-center items-center">
      {theme === false ? (
        <PiSunDim
          className="w-8 h-8 2xl:w-10 2xl:h-10 hover:text-opacity-80 hover:duration-500 duration-500 shadow-2xl text-purple5"
          onClick={() => {
            onSelectMode(theme)
            dispatch(changeToggle());
          
          }}
        />
      ) : (
        <PiMoon
          className="w-7 h-7 2xl:w-10 2xl:h-10 hover:text-opacity-80 hover:duration-500 duration-500 shadow-2xl text-purple5"
            onClick={() =>
            {
              onSelectMode(theme)
            dispatch(changeToggle());
            

          }}
        />
      )}
    </div>
  );
}

export default Theme;
