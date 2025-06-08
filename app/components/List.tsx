import { useState } from "react";
import { useSound } from "react-sounds";

export default function List() {
  const [openWindow, setOpenWindow] = useState();
  const { play } = useSound("ui/button_soft_double");

  return [
    "About me :3",
    "Socials ^-^",
    "Things i like >w<",
    "Also click this o.O",
  ].map((e) => (
    <div
      onClick={() => play()}
      key={e}
      className="my-7 w-28 text-center cursor-pointer opacity-80 active:opacity-100"
    >
      {e}
    </div>
  ));
}
