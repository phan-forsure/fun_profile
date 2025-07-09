import { motion } from "motion/react";
import WindowBar from "../WindowBar";

export default function Hobbies({
  left,
  top,
  name,
  zIndex,
}: {
  left: number | undefined;
  top: number | undefined;
  name: string;
  zIndex: number;
}) {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className={`profile absolute bg-[#161616] border-[1px] rounded-sm transiton-all w-[100vh]`}
      style={{ left: left!, top: top!, zIndex: zIndex }}
    >
      <WindowBar windowName={name} />
      <div className="overflow-y-scroll h-[70vh]">
        <h1 className="text-center p-4 text-xl opacity-85 border-b-1">
          my hobbies
        </h1>
        <div className="flex flex-wrap m-4 p-8">
          <div className="mb-4">
            when i have free time i usually play games, program or run in
            circles until i go crazy
          </div>
          <div className="mb-4">
            my ordinary day doesn't have any amazing things to happen <br />i
            repeat everyday endlessly
          </div>
        </div>
        <h1 className="text-center p-4 text-xl opacity-85 border-b-1 border-t-1">
          gallary i gathered over time
        </h1>
        <div className="mb-4 gallery grid grid-cols-2">
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
        </div>
      </div>
    </motion.div>
  );
}
