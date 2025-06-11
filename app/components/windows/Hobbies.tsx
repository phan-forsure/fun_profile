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
      <div className="overflow-y-scroll h-[50vh]">
        
      </div>
    </motion.div>
  );
}
