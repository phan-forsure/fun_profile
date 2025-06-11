import { WindowsContext } from "@/app/page";
import { useContext } from "react";
import Main from "./Main";
import Hobbies from "./Hobbies";
import Socials from "./Socials";
import About from "./About";

export default function Windows() {
  const { openWindows, zIndexMap } = useContext(WindowsContext);
  return (
    <div
      className={`absolute w-0 h-0 left-0 top-0 select-none ${
        openWindows.size != 0 && "z-20"
      }`}
    >
      {openWindows.has("About me :3") && (
        <About
          name={"About me :3"}
          left={100}
          top={100}
          zIndex={zIndexMap["About me :3"]}
        />
      )}
      {openWindows.has("Socials ^-^") && (
        <Socials
          name={"Socials ^-^"}
          left={100}
          top={100}
          zIndex={zIndexMap["Socials ^-^"]}
        />
      )}
      {openWindows.has("Things i like >w<") && (
        <Hobbies
          name={"Things i like >w<"}
          left={100}
          top={100}
          zIndex={zIndexMap["Things i like >w<"]}
        />
      )}
      {openWindows.has("Also click this o.O") && (
        <Main
          name={"Also click this o.O"}
          left={100}
          top={100}
          zIndex={zIndexMap["Also click this o.O"]}
        />
      )}
    </div>
  );
}
