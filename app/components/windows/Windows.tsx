import { WindowsContext } from "@/app/page";
import { useContext } from "react";
import Main from "./Main";

export default function Windows() {
  const openWindows = useContext(WindowsContext);
  return (
    <div className={`absolute w-full h-full select-none ${openWindows.openWindows.size != 0 && "z-20"}`}>
      {openWindows.openWindows.has("About me :3") && (
        <Main name={"About me :3"} left={100} top={100} />
      )}
      {openWindows.openWindows.has("Socials ^-^") && (
        <Main name={"Socials ^-^"} left={100} top={100} />
      )}
      {openWindows.openWindows.has("Things i like >w<") && (
        <Main name={"Things i like >w<"} left={100} top={100} />
      )}
      {openWindows.openWindows.has("Also click this o.O") && (
        <Main name={"Also click this o.O"} left={100} top={100} />
      )}
    </div>
  );
}
