import { useContext } from "react";
import { playSound, useSound } from "react-sounds";
import { WindowsContext } from "../page";

export default function List() {
  const { openWindows, setOpenWindows } = useContext(WindowsContext);
  const { play } = useSound("ui/button_soft_double");

  const openWindow = (name: string) => {
    setOpenWindows(new Set(openWindows).add(name));
  };

  return (
    <>
      {[
        "About me :3",
        "Socials ^-^",
        "Things i like >w<",
        "Also click this o.O",
      ].map((e) => (
        <div
          onClick={() => {
            openWindow(e);
            play();
          }}
          key={e}
          className="my-7 w-28 text-center cursor-pointer opacity-80 active:opacity-100"
        >
          {e}
        </div>
      ))}
      <div
        onClick={() => {
          playSound("ui/copy");
          setOpenWindows(new Set());
        }}
        className="close-button my-7 w-28 text-center cursor-pointer opacity-80 active:opacity-100"
      >
        Close all windows [x]
      </div>
    </>
  );
}
