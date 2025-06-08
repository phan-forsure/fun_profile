import { motion } from "motion/react";
import { useEffect } from "react";
import { playSound } from "react-sounds";
import WindowBar from "./WindowBar";

export default function Main({
  left,
  top,
  name
}: {
  left: number | undefined;
  top: number | undefined;
  name: string
}) {
  useEffect(() => {
    playSound("ui/window_open");
    return () => {
      playSound("ui/window_close");
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div
        className={`profile absolute bg-[#161616] border-[1px] rounded-sm transiton-all w-[100vh] z-20`}
        style={{ left: left! + 200, top: top! - 20 }}
      >
        <WindowBar windowName={name} />
        {/* <div className="background-image"></div>
        <div className="avatar h-fit"></div>
        <div className="about flex justify-center items-center">
          <h1 className="text-3xl pb-12 antialiased font-semibold tracking-[-0.02em] h-fit">
            Phan
          </h1>
        </div> */}
        <div className="p-24">Window</div>
      </div>
    </motion.div>
  );
}
