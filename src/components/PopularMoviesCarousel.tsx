import { usePopularMovies } from "../api/usePopularMovies";
import { motion } from "motion/react";

interface PopularMovieResponse {
  onClick: (movie: string) => void;
}

export const PopularMoviesCarousel = ({ onClick }: PopularMovieResponse) => {
  const { popularMovies } = usePopularMovies();

  return popularMovies ? (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-5 overflow-x-auto box-border mb-[32px] px-[32px]"
    >
      {popularMovies
        .filter(({ poster }) => poster !== "N/A")
        .map((movie) => (
          <img
            key={movie.name}
            src={movie.poster}
            alt={movie.name}
            onClick={() => onClick(movie.name)}
            className="w-[210px] object-cover rounded-[4px] hover:cursor-pointer"
          />
        ))}
    </motion.div>
  ) : null;
};
