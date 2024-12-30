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
  const [form, setForm] = useState({ search, wokeMeter });
  const { data, isFetching } = useWokeMovie({
    search: form.search,
    wokeMeter: form.wokeMeter,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearchClick = () => {
    setSearch("");
    setForm({ search: "", wokeMeter });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setForm({ search, wokeMeter });
  };

  const handleTypewriterClick = (movie: string) => {
    setSearch(movie);
    setForm({ search: movie, wokeMeter });
  };

  const handleWokeMeterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setWokeMeter(Number(value));
    setForm({ search, wokeMeter: Number(value) });
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
              handleSearchChange={handleSearchChange}
              handleSubmit={handleSubmit}
              isFetching={isFetching}
              search={search}
            />
            {isFetching && (
              <div className="flex w-full justify-center mt-6 font-martian text-lg">
                <LoadingMessages />
              </div>
            )}
            {!!data && (
              <Movie
                headline={data.headline}
                movieName={data.movieName || form.search}
                summary={data.summary}
                wokeScore={data.wokeScore}
                poster={data.poster}
                rating={data.rating}
                released={data.released}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
