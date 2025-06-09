import { WindowsContext } from "@/app/page";
import { useContext, useEffect, useRef, useState } from "react";
import { useSound } from "react-sounds";

export default function WindowBar({ windowName }: { windowName: string }) {
  const { openWindows, setOpenWindows } = useContext(WindowsContext);
  const [isDragging, setIsDragging] = useState(false);
  const moveAbleRef = useRef<HTMLDivElement>(null);
  const { play } = useSound("ui/button_soft_double");

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (isDragging && moveAbleRef.current?.parentElement) {
        moveAbleRef.current.parentElement.style.left = `${event.clientX}px`;
        moveAbleRef.current.parentElement.style.top = `${event.clientY}px`;
        moveAbleRef.current.parentElement.style.zIndex = `${
          isDragging ? "z-1000" : "z-1"
        }`;
      }
    }

    function handleMouseUp() {
      setIsDragging(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  function handleMouseDown() {
    setIsDragging(true);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      ref={moveAbleRef}
      className={`border-b-1 flex justify-end items-center p-1`}
    >
      <span
        onClick={() => {
          const updatedWindows = new Set(openWindows);
          updatedWindows.delete(windowName);
          setOpenWindows(updatedWindows);
          play();
        }}
      >
        [X]
      </span>
    </div>
  );
}
