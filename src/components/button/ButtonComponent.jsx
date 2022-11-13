import React from "react";

export default function ButtonComponent({ onClick, title }) {
  return (
    <div
      className=" px-20 h-10 bg-red-800 flex flex-col rounded-lg items-center justify-center hover:bg-red-500 select-none "
      onClick={onClick}
    >
      <div>{title}</div>
    </div>
  );
}
