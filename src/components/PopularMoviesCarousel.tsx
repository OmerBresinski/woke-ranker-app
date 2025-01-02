import { usePopularMovies } from "../api/usePopularMovies";
import { motion } from "motion/react";

interface PopularMovieResponse {
  onClick: (movie: string) => void;
}

export const PopularMoviesCarousel = ({ onClick }: PopularMovieResponse) => {
  const { popularMovies } = usePopularMovies();

  return popularMovies ? (
    <div className="flex flex-col gap-4">
      <motion.p className="font-inria font-bold text-base px-8">
        Popular Titles
      </motion.p>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-5 overflow-x-auto box-border mb-8 px-8"
      >
        {popularMovies
          .filter(({ poster }) => poster !== "N/A")
          .map((movie) => (
            <img
              key={movie.name}
              src={movie.poster}
              alt={movie.name}
              onClick={() => onClick(movie.name)}
              className="h-[230px] w-full object-cover rounded-[4px] hover:cursor-pointer"
            />
          ))}
      </motion.div>
    </div>
  ) : null;
};
