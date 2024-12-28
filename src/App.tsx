import { useState } from "react";
import { LoadingMessages } from "./components/LoadingMessages";
import { SearchInput } from "./components/SearchInput";
import { AnimatePresence } from "motion/react";
import { useWokeMovie } from "./api/useWokeMovie";

function App() {
  const [search, setSearch] = useState("");
  const { data, isFetching, fetchMovie } = useWokeMovie({ search });

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

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary w-screen h-screen flex flex-col items-center pt-24 font-serif gap-4"
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
        {isFetching && <LoadingMessages />}
      </AnimatePresence>
    </form>
  );
}

export default App;
