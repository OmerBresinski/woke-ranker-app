import { useState } from "react";
import { LoadingMessages } from "./components/LoadingMessages";
import { SearchInput } from "./components/SearchInput";
import { AnimatePresence } from "motion/react";
import { useWokeMovie } from "./api/useWokeMovie";
import { Movie } from "./components/Movie";
import { Typewriter } from "./components/Typewriter";
import { BrandIcon } from "./components/BranIcon";
import { Slider } from "./components/Slider";

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
    <div className="relative h-screen w-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-primary w-full h-full flex flex-col items-center pt-32 font-serif"
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
          isDisabled={isFetching || search === data?.movieName}
        />
        {isFetching && (
          <div className="mt-4">
            <LoadingMessages />
          </div>
        )}
        <AnimatePresence>
          {!isFetching && data && (
            <Movie
              headline={data.headline}
              movieName={data.movieName}
              summary={data.summary}
              wokeScore={data.wokeScore}
              poster={data.poster}
            />
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

export default App;
