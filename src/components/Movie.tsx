import { motion } from "motion/react";
import { GrokResponse } from "../api/useWokeMovie";
import { Stars } from "./Stars";

type MovieProps = GrokResponse;

export const Movie = ({
  movieName,
  wokeScore,
  summary,
  headline,
  poster,
}: MovieProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-8 items-center"
    >
      <p className="text-lg font-thin">{headline}</p>
      <div className="flex gap-5">
        <img src={poster} className="w-40 rounded-md" />
        <div className="flex flex-col justify-between pb-2">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">{movieName}</p>
            <p className="text-sm">{summary}</p>
          </div>
          <div>
            <p className="text-lg font-bold">Woke Score</p>
            <div className="flex gap-1">
              <Stars amount={wokeScore} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
