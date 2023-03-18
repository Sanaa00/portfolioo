import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbMoonFilled } from "react-icons/tb";
import { HiSun } from "react-icons/hi";
import { changeToggle } from "./themeSlice";
function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="w-10 justify-center items-center">
      {theme === false ? (
        <HiSun
          className="w-8 h-8 "
          onClick={() => {
            dispatch(changeToggle());
          }}
        />
      ) : (
        <TbMoonFilled
          className="w-7 h-7"
          onClick={() => {
            dispatch(changeToggle());
          }}
        />
      )}
    </div>
  );
}

export default Theme;
