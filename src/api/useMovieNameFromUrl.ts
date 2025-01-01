import { useLocation } from "react-router-dom";

export const useMovieNameFromUrl = () => {
  const { pathname } = useLocation();
  const movieName = decodeURIComponent(pathname.replace("/", ""));
  return { movieName };
};
