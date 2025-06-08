"use client";
import { useState } from "react";
import { useSound } from "react-sounds";
import Nav from "./Nav";

export default function StartMenu() {
  const { play } = useSound("ui/button_soft_double");
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="w-92 h-[100vh] z-10 flex flex-col justify-center items-center">
        <div
          onClick={() => {
            if (menu) {
              setMenu(false);
            } else {
              setMenu(true);
            }
            play();
          }}
          className="click-me relative flex top-0 justify-center items-center w-52 border-[1px] h-10 text-sm cursor-pointer select-none bg-[#161616] rounded-sm transition-[.1s]"
        >
          {menu ? "close :(" : "click me :)"}
        </div>
        {menu && <Nav />}
      </div>
    </>
  );
}
