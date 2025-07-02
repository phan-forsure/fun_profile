import { motion } from "motion/react";
import WindowBar from "../WindowBar";
import { useEffect, useState } from "react";

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
  interface OsuData {
    playstyle: string[];
    avatar_url: string;
    statistics: {
      global_rank: number | null;
      maximum_combo: number | null;
      pp: number | null;
      hit_accuracy: number | null;
      play_count: number | null;
      play_time: number | null;
    };
    username: string;
  }

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
      <div className="overflow-y-scroll h-[70vh]">
        <h2 className="text-center p-4 text-xl opacity-85 border-b-1">
          osu! profile
        </h2>
        <div className="flex flex-wrap m-4 mt-12">
          {/* avatar */}
          <div>
            <img
              className="osu-avatar mx-4 w-[20vh] h-[20vh] rounded-lg"
              src={osu.avatar_url ? osu.avatar_url : undefined}
            />
          </div>
          {/* data */}
          <div className="flex-1">
            <div className="opacity-75 text-2xl w-full">{osu.username}</div>
            <div className="opacity-75 text-2xl">
              #{osu.statistics.global_rank}
            </div>
            <div className="opacity-75 text-2xl">{osu.statistics.pp} pp</div>
            <div className="opacity-75 text-2xl">
              {osu.statistics.maximum_combo} maximum combo
            </div>
          </div>

          <div className="flex w-full m-2 my-6">
            <div className="mx-2">
              {osu.statistics.hit_accuracy?.toPrecision(3)}% hit accuracy
            </div>{" "}
            |<div className="mx-2">{osu.statistics.play_count} plays</div> |
            <div className="mx-2">
              {(osu.statistics.play_time! / 60 / 60).toPrecision(4)} hours
              played
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
