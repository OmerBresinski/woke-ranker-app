import { useState } from "react";
import { LoadingMessages } from "./components/LoadingMessages";
import { SearchInput } from "./components/SearchInput";
import { AnimatePresence } from "motion/react";
import { useWokeMovie } from "./api/useWokeMovie";
import { Typewriter } from "./components/Typewriter";
import { BrandIcon } from "./components/BranIcon";
import { Slider } from "./components/Slider";
import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Movie } from "./components/Movie";
import { isMobile } from "./utils/isMobile";
import { PopularMoviesCarousel } from "./components/PopularMoviesCarousel";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [wokeMeter, setWokeMeter] = useState(
    +(searchParams.get("wokeMeter") || 1) || 1
  );
  const { movie, isFetching } = useWokeMovie({
    search: searchParams.get("search") || "",
    wokeMeter: +(searchParams.get("wokeMeter") || 1) || 1,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearchClick = () => {
    setSearch("");
    setSearchParams("");
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setSearchParams(`?search=${search}&wokeMeter=${wokeMeter}`);
  };

  const handleTypewriterClick = (movie: string) => {
    setSearch(movie);
    setSearchParams(`?search=${movie}&wokeMeter=${wokeMeter}`);
  };

  const handleWokeMeterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setWokeMeter(Number(value));
    setSearchParams(`?search=${search}&wokeMeter=${value}`);
  };

  const handleSelectPopularMovie = (movie: string) => {
    setSearch(movie);
    setSearchParams(`?search=${movie}&wokeMeter=${wokeMeter}`);
  };

  return (
    <div
      className={`relative h-dvh w-screen ${movie ? "bg-white" : "bg-primary"}`}
    >
      <Slider
        value={wokeMeter}
        onChange={handleWokeMeterChange}
        hasData={isFetching || !!movie}
      />
      <AnimatePresence>
        {!isFetching && !movie ? (
          <div
            className={`flex flex-col justify-between h-full ${
              isMobile && "overflow-hidden"
            }`}
          >
            <motion.form
              action="."
              onSubmit={handleSubmit}
              className={`w-full flex flex-col items-center ${
                isMobile ? "overflow-hidden pt-[120px] pb-8" : "pt-32 pb-8"
              } font-serif ${isMobile ? "px-[42px]" : "px-0"}`}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BrandIcon />
              <div
                className={`text-center max-w-3xl pt-2 ${
                  isMobile ? "mt-11 mb-6" : "mt-14 mb-[34px]"
                }`}
              >
                <AnimatePresence mode="wait">
                  {!isFetching && !movie && (
                    <Typewriter onClick={handleTypewriterClick} />
                  )}
                </AnimatePresence>
              </div>
              <SearchInput
                value={search}
                onChange={handleSearchChange}
                onClear={handleClearSearchClick}
                onSubmit={handleSubmit}
                isDisabled={isFetching}
              />
            </motion.form>
            <PopularMoviesCarousel onClick={handleSelectPopularMovie} />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex flex-col pt-5 ${
              isMobile ? "px-11" : "px-14"
            } w-full ${isMobile ? "gap-[10px]" : "gap-[60px]"}`}
          >
            <Navbar
              handleClearSearchClick={handleClearSearchClick}
              handleSearchChange={handleSearchChange}
              handleSubmit={handleSubmit}
              isFetching={isFetching}
              search={search}
            />
            {isFetching && !movie && (
              <div className="flex w-full justify-center mt-6 font-martian text-lg">
                <LoadingMessages />
              </div>
            )}
            {!!movie && (
              <div className={`${isMobile ? "px-0" : "px-60"}`}>
                <Movie
                  headline={movie.headline}
                  movieName={
                    movie.movieName || searchParams.get("search") || "N/A"
                  }
                  summary={movie.summary}
                  wokeScore={movie.wokeScore}
                  poster={movie.poster}
                  rating={movie.rating}
                  released={movie.released}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
