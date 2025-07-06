import { motion } from "motion/react";
import WindowBar from "../WindowBar";
import { useEffect, useState } from "react";
import OsuData from "../OsuData";

export default function Main({
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
  const [osu, setOsu] = useState<OsuData>({
    playstyle: [],
    avatar_url: "",
    statistics: {
      global_rank: null,
      maximum_combo: null,
      pp: null,
      hit_accuracy: null,
      play_count: null,
      play_time: null,
    },
    username: "",
  });

  useEffect(() => {
    fetch("/api/osu")
      .then((res) => res.json())
      .then((res) => {
        setOsu(res);
        console.log(res);
      });
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className={`profile absolute bg-[#161616] border-[1px] rounded-sm transiton-all w-[100vh]`}
      style={{ left: left!, top: top!, zIndex: zIndex }}
    >
      <WindowBar windowName={name} />
      <div className="overflow-y-scroll h-[70vh] window-content">
        {osu.username != "" ? (
          <OsuData osu={osu} />
        ) : (
          <div className="text-2xl p-32 w-full flex items-center justify-center">
            Loading ...
          </div>
        )}
      </div>
    </motion.div>
  );
}
