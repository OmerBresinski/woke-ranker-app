import { LoadingMessages } from "../components/LoadingMessages";
import { useFormBehavior } from "../api/useFormBehavior";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { isMobile } from "../utils/isMobile";
import { MovieDetails } from "../components/MovieDetails";
import { Slider } from "../components/Slider";
import { useWokeMovie } from "../api/useWokeMovie";

export const Movie = () => {
  const {
    search,
    wokeMeter,
    handleSubmit,
    handleSearchChange,
    handleWokeMeterChange,
    handleClearSearchClick,
  } = useFormBehavior();
  const { movie, isFetching, isError, error } = useWokeMovie({ wokeMeter });

  return (
    <div className={`relative h-dvh w-screen bg-white`}>
      <Slider
        value={wokeMeter}
        onChange={handleWokeMeterChange}
        hasData={isFetching || !!movie}
      />
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`flex flex-col pt-5 ${isMobile ? "px-11" : "px-14"} w-full ${
          isMobile ? "gap-[10px]" : "gap-[60px]"
        }`}
      >
        <Navbar
          handleClearSearchClick={handleClearSearchClick}
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
          isFetching={isFetching}
          search={search}
        />
        {isError && (
          <div className="flex w-full justify-center mt-6 font-martian text-lg">
            {(error as Error).message}
          </div>
        )}
        {isFetching && !movie && !isError && (
          <div className="flex w-full justify-center mt-6 font-martian text-lg">
            <LoadingMessages />
          </div>
        )}
        {!!movie && (
          <div className={`${isMobile ? "px-0" : "px-60"}`}>
            <MovieDetails
              headline={movie.headline}
              name={movie.name || "N/A"}
              summary={movie.summary}
              wokeScore={movie.wokeScore}
              poster={movie.poster}
              rating={movie.rating}
              released={movie.released}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};
