import { motion } from "motion/react";
import { GrokResponse } from "../api/useWokeMovie";
import { WokeScore } from "./WokeScore";

type MovieProps = GrokResponse;

export const Movie = ({
  movieName,
  wokeScore,
  summary,
  headline,
  poster,
  rating,
  released,
}: MovieProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full rounded-lg border border-[#D4D3DC] p-[30px]"
    >
      <div className="flex gap-6 font-martian">
        <div className="min-w-[190px]">
          <img src={poster} className="w-[190px] rounded-md" />
        </div>
        <div className="flex flex-col justify-between pb-2">
          <div className="flex flex-col">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-3">
                <p className="text-2xl font-medium">{movieName}</p>
                <p className="text-base text-[#8C8C93] font-normal">
                  {new Date(released).getFullYear()}
                  <span className="mx-1">·</span>
                  {rating}
                </p>
              </div>
              <WokeScore value={wokeScore} />
            </div>
            <p className="text-base font-semibold font-inter mt-[13px] mb-[15px]">
              {headline}
            </p>
            <p className="text-base font-inter">{summary}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
