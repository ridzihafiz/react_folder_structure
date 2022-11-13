import React from "react";
import { ImageIkea } from "../../assets";
import ButtonComponent from "../../components/button/ButtonComponent";
import { URLCode, ShowName, colors } from "../../utils";

export default function Home() {
  return (
    <div
      className=" flex flex-col w-screen h-screen items-center justify-center "
      style={{ backgroundColor: colors.green }}
    >
      <h1>Home Screen</h1>
      <img
        src={ImageIkea}
        alt="Image Ikea"
        className=" flex flex-col w-40 h-40 object-cover "
      />
      <ButtonComponent onClick={() => ShowName("rid")} title="Button Home" />
      <ButtonComponent
        onClick={() => ShowName("garismoire")}
        title="Button Baru"
      />
      {URLCode}
    </div>
  );
}
