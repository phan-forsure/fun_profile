"use client";
import { useEffect, useRef, useState } from "react";
import { useSound } from "react-sounds";
import Main from "./Main";

export default function StartMenu() {
  const moveAbleRef = useRef<HTMLDivElement>(null);
  const { play } = useSound("ui/pop_open");
  const [menu, setMenu] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({ x: undefined, y: undefined });

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
      <div
        ref={moveAbleRef}
        // onMouseDown={handleMouseDown}
        onClick={() => {
          setMenu(true);
          setPosition({ x: 200, y: 100 });
          play();
        }}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
        className="click-me w-52 border-[1px] h-10 text-sm cursor-pointer select-none bg-[#161616] rounded-sm transition-[.1s]"
      >
        click me :)
      </div>
      {menu && <Main left={position.x} top={position.y} />}
    </>
  );
}
