import React from "react";

export default function ButtonComponent({ onClick, title }) {
  return (
    <div
      className=" px-20 h-10 bg-blue-200 flex items-center justify-center "
      onClick={onClick}
    >
      <div>ButtonComponent</div>
    </div>
  );
}
