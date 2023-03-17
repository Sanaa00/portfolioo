import React from "react";

function Container(props) {
  console.log(props);
  return <div className="flex px-32 mx-auto w-full">{props.children}</div>;
}

export default Container;
