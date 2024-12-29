import { useState } from "react";
import { LoadingMessages } from "./components/LoadingMessages";
import { SearchInput } from "./components/SearchInput";
import { AnimatePresence } from "motion/react";
import { useWokeMovie } from "./api/useWokeMovie";
import { Movie } from "./components/Movie";
import { Typewriter } from "./components/Typewriter";

function App() {
  const [wokeMeter, setWokeMeter] = useState(3);
  const [search, setSearch] = useState("");
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
    setSearch(movie);
  };

  const handleWokeMeterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWokeMeter(Number(e.target.value));
  };

  return (
    <div className="relative h-screen w-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-primary w-full h-full flex flex-col items-center pt-24 font-serif gap-4"
      >
        <img src="/logo.png" className="w-44 grayscale"></img>
        <p className="text-xl">
          Tell me of the movie you wish to judge but dare not ask
        </p>
        <SearchInput
          value={search}
          onChange={handleSearchChange}
          onClear={handleClearSearchClick}
          onSubmit={handleSubmit}
          isDisabled={isFetching || search === data?.movieName}
        />
        <AnimatePresence mode="wait">
          <div className="max-w-3xl pt-2">
            {!isFetching && !data && (
              <Typewriter onClick={handleTypewriterClick} />
            )}
            {isFetching && <LoadingMessages />}
            {!isFetching && data && (
              <Movie
                headline={data.headline}
                movieName={data.movieName}
                summary={data.summary}
                wokeScore={data.wokeScore}
                poster={data.poster}
              />
            )}
          </div>
        </AnimatePresence>
      </form>
      <input
        type="number"
        max="3"
        min="1"
        className="absolute top-0 left-0"
        value={wokeMeter}
        onChange={handleWokeMeterChange}
      ></input>
    </div>
  );
}

export default App;
