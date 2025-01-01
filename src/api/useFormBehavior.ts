import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovieNameFromUrl } from "./useMovieNameFromUrl";
import { useSliderContext } from "../context/SliderContext";

export const useFormBehavior = () => {
  const navigate = useNavigate();
  const { wokeMeter, setWokeMeter } = useSliderContext();
  const { movieName } = useMovieNameFromUrl();
  const [search, setSearch] = useState(movieName || "");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearchClick = () => {
    setSearch("");
    navigate(`/`);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    navigate(`/${search}`);
  };

  const handleTypewriterClick = (movie: string) => {
    setSearch(movie);
    navigate(`/${movie}`);
  };

  const handleWokeMeterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setWokeMeter(Number(value));
  };

  const handleSelectPopularMovie = (movie: string) => {
    setSearch(movie);
    navigate(`/${movie}`);
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
