import React from "react";
import { ImageShalua } from "../../assets";
import ButtonComponent from "../../components/button/ButtonComponent";
import { Name, URLCode } from "../../utils";
import { ShowName } from "../../utils/ShowName";

export default function Home() {
  return (
    <div className="App">
      <h1>Home Screen</h1>
      <img
        src={ImageShalua}
        alt="Image Shalua"
        className=" w-40 h-40 object-cover "
      />
      <ButtonComponent onClick={() => ShowName("rid")} />
      {URLCode}
    </div>
  );
}
