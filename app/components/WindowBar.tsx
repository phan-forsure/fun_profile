import { WindowsContext } from "@/app/page";
import { useContext, useEffect, useRef, useState } from "react";
import { useSound } from "react-sounds";

export default function WindowBar({ windowName }: { windowName: string }) {
  const { openWindows, setOpenWindows, zIndexMap, setZIndexMap } =
    useContext(WindowsContext);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const moveAbleRef = useRef<HTMLDivElement>(null);
  const { play } = useSound("ui/button_soft_double");

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (isDragging && moveAbleRef.current?.parentElement) {
        moveAbleRef.current.parentElement.style.left = `${
          event.clientX - offset.x
        }px`;
        moveAbleRef.current.parentElement.style.top = `${
          event.clientY - offset.y
        }px`;
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
  }, [isDragging, offset]);

  function handleMouseDown(event: React.MouseEvent) {
    if (moveAbleRef.current?.parentElement) {
      const rect = moveAbleRef.current.parentElement.getBoundingClientRect();
      setOffset({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });

      // Update zIndexMap to bring this window to the front
      const maxZIndex = Math.max(...Object.values(zIndexMap), 0);
      setZIndexMap({ ...zIndexMap, [windowName]: maxZIndex + 1 });
    }
    setIsDragging(true);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      ref={moveAbleRef}
      style={{ zIndex: zIndexMap[windowName] || 1 }}
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
