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

function App() {
  const [search, setSearch] = useState("");
  const [wokeMeter, setWokeMeter] = useState(3);
  const { data, isFetching, fetchMovie } = useWokeMovie({ search, wokeMeter });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearchClick = () => {
    setSearch("");
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    fetchMovie();
  };

  const handleTypewriterClick = (movie: string) => {
    // fetchMovie({ queryKey: ["woke-movie", { search: movie, wokeMeter }] });
    setSearch(movie);
  };

  const handleWokeMeterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // fetchMovie({ queryKey: ["woke-movie", { search, wokeMeter }] });
    setWokeMeter(Number(e.target.value));
  };

  return (
    <div
      className={`relative h-screen w-screen ${
        data ? "bg-white" : "bg-primary"
      }`}
    >
      <Slider value={wokeMeter} onChange={handleWokeMeterChange} />
      <AnimatePresence>
        {!isFetching && !data ? (
          <motion.form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col items-center pt-32 font-serif"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Slider value={wokeMeter} onChange={handleWokeMeterChange} />
            <BrandIcon />
            <div className="max-w-3xl pt-2 mt-14 mb-[34px]">
              <AnimatePresence mode="wait">
                {!isFetching && !data && (
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
            {isFetching && (
              <div className="mt-4">
                <LoadingMessages />
              </div>
            )}
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col pt-5 px-14 w-full gap-[60px]"
          >
            <Navbar
              handleClearSearchClick={handleClearSearchClick}
              handleSearchChange={handleClearSearchClick}
              handleSubmit={handleSubmit}
              isFetching={isFetching}
              search={search}
            />
            {!!data && (
              <Movie
                headline={data.headline}
                movieName={data.movieName}
                summary={data.summary}
                wokeScore={data.wokeScore}
                poster={data.poster}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
