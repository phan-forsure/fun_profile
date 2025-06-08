import { motion } from "motion/react";
import { useEffect } from "react";
import { useSound } from "react-sounds";

export default function Main({
  left,
  top,
}: {
  left: number | undefined;
  top: number | undefined;
}) {
  const { play } = useSound("ui/window_open");

  useEffect(() => {
    play();
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div
        className={`profile absolute bg-[#161616] border-[1px] rounded-sm transiton-all w-[100vh]`}
        style={{ left: left! + 200, top: top! - 20 }}
      >
        <div className="background-image"></div>
        <div className="avatar h-fit"></div>
        <div className="about flex justify-center items-center">
          <h1 className="text-3xl pb-12 antialiased font-semibold tracking-[-0.02em] h-fit">
            Phan
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
