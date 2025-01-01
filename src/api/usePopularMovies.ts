import { useQuery } from "@tanstack/react-query";

export interface PopularMovieResponse {
  name: string;
  poster: string;
}

export const usePopularMovies = () => {
  const { data, isLoading, isFetching, error } = useQuery<
    PopularMovieResponse[]
  >({
    staleTime: Infinity,
    queryKey: ["popular-movies"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}popular`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      return json;
    },
  });

  return {
    popularMovies: data,
    error,
    isLoading,
    isFetching,
  };
};
