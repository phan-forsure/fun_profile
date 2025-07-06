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