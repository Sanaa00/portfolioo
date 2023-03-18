import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbMoonFilled } from "react-icons/tb";
import { HiSun } from "react-icons/hi";
import { changeToggle } from "./themeSlice";
function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="w-10 justify-center items-center shadow-2xl">
      {theme === false ? (
        <HiSun
          className="w-8 h-8 hover:scale-110 hover:duration-500 duration-500 shadow-2xl text-orange"
          onClick={() => {
            dispatch(changeToggle());
          }}
        />
      ) : (
        <TbMoonFilled
          className="w-7 h-7 hover:scale-110 hover:duration-500 duration-500 shadow-2xl text-orange"
          onClick={() => {
            dispatch(changeToggle());
          }}
        />
      )}
    </div>
  );
}

export default Theme;
