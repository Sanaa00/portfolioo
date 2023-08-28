import React from "react";

function Container(props) {
  // console.log(props);
  return (
    <div className="flex px-6 sm:px-12 md:px-20 lg:mx-26 xl:mx-36  ">
      {props.children}
    </div>
  );
}

export default Container;
