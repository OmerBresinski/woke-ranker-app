import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMovieNameFromUrl } from "./useMovieNameFromUrl";

export const useFormBehavior = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { movieName } = useMovieNameFromUrl();
  const [search, setSearch] = useState(movieName || "");
  const [wokeMeter, setWokeMeter] = useState(
    +(searchParams.get("wokeMeter") || DEFAULT_WOKE_METER)
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearchClick = () => {
    setSearch("");
    navigate(`/?wokeMeter=${wokeMeter || 1}`);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    navigate(`/${search}?wokeMeter=${wokeMeter}`);
  };

  const handleTypewriterClick = (movie: string) => {
    setSearch(movie);
    navigate(`/${movie}?wokeMeter=${wokeMeter}`);
  };

  const handleWokeMeterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setWokeMeter(Number(value));
  };

  const handleSelectPopularMovie = (movie: string) => {
    setSearch(movie);
    navigate(`/${movie}?wokeMeter=${wokeMeter}`);
  };

  return {
    currentMovie: search,
    wokeMeter,
    search,
    handleSubmit,
    handleSearchChange,
    handleWokeMeterChange,
    handleTypewriterClick,
    handleClearSearchClick,
    handleSelectPopularMovie,
  };
};

const DEFAULT_WOKE_METER = 3;
