import { motion } from "motion/react";
import WindowBar from "./WindowBar";

export default function Main({
  left,
  top,
  name,
}: {
  left: number | undefined;
  top: number | undefined;
  name: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`profile absolute bg-[#161616] border-[1px] rounded-sm transiton-all w-[100vh]`}
      style={{ left: left!, top: top! }}
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
    </motion.div>
  );
}
