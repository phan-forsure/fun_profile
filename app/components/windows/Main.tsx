import { motion } from "motion/react";
import WindowBar from "../WindowBar";
import { useEffect } from "react";

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
  // useEffect(() => {
  //   const url = new URL("https://osu.ppy.sh/api/v2/users/34406127/osu");

  //   // const params = {
  //   //   key: ""
  //   // };
  //   // Object.keys(params).forEach((key) =>
  //   //   url.searchParams.append(key, params[key])
  //   // );

  //   const headers = {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     Authorization: "Bearer x21nJRBjXuIyMfyqcjFIjZToYo41QDAEQv6uSOYj",
  //   };

  //   fetch(url, {
  //     method: "GET",
  //     headers,
  //   }).then((response) => response.json().then((res) => console.log(res)));
  // }, []);

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className={`profile absolute bg-[#161616] border-[1px] rounded-sm transiton-all w-[100vh]`}
      style={{ left: left!, top: top!, zIndex: zIndex }}
    >
      <WindowBar windowName={name} />
      <div className="overflow-y-scroll h-[70vh]">
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
