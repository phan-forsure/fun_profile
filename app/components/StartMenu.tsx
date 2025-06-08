"use client";
import { useState } from "react";
import { useSound } from "react-sounds";
import Nav from "./Nav";

export default function StartMenu() {
  const { play } = useSound("ui/button_soft_double");
  const [menu, setMenu] = useState(false);

  // useEffect(() => {
  //   function handleMouseMove(event: MouseEvent) {
  //     if (isDragging && moveAbleRef.current) {
  //       setPosition({
  //         x: event.clientX,
  //         y: event.clientY,
  //       });
  //     }
  //   }

  //   function handleMouseUp() {
  //     setIsDragging(false);
  //   }

  //   window.addEventListener("mousemove", handleMouseMove);
  //   window.addEventListener("mouseup", handleMouseUp);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("mouseup", handleMouseUp);
  //   };
  // }, [isDragging]);

  // function handleMouseDown(event: React.MouseEvent) {
  //   setIsDragging(true);
  // }

  return (
    <>
      <div className="w-92 h-[100vh] flex flex-col justify-center items-center">
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
