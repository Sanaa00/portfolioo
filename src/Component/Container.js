import React from "react";

function Container(props) {
  console.log(props);
  return (
    <div className="flex px-6 sm:px-12 md:px-32 mx-auto w-full ">
      {props.children}
    </div>
  );
}

export default Container;
