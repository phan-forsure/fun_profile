import { motion } from "motion/react";
import List from "./List";

export default function Nav() {
  return (
    <motion.div
      className="select-none"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="w-52 bg-[#161616] flex flex-wrap justify-center items-center h-fit border-1 rounded-sm mt-12 py-8">
        <div className="w-fit">
          <List />
        </div>
      </div>
    </motion.div>
  );
}
