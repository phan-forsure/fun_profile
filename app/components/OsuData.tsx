export default function OsuData({ osu }: { osu: OsuData }) {
  return (
    <div className="osu-data border-b-1">
      <h2 className="text-center p-4 text-xl opacity-85 border-b-1">
        osu! profile
      </h2>x
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
            {(osu.statistics.play_time! / 60 / 60).toPrecision(5)} hours played
          </div>
        </div>
      </div>
    </div>
  );
}
