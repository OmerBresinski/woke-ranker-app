import { useQuery } from "@tanstack/react-query";
import { useMovieNameFromUrl } from "./useMovieNameFromUrl";

export interface GrokResponse {
  name: string;
  wokeScore: number;
  summary: string;
  headline: string;
  poster: string;
  rating: string;
  released: string;
}

interface UseWokeMovieProps {
  wokeMeter: number;
}

export const useWokeMovie = ({ wokeMeter }: UseWokeMovieProps) => {
  const { movieName } = useMovieNameFromUrl();
  const { data, isLoading, isFetching, error, refetch } =
    useQuery<GrokResponse>({
      queryKey: ["woke-movie", movieName, wokeMeter],
      queryFn: async ({ queryKey }) => {
        const [, search, wokeMeter] = queryKey;
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}${search}?wokeMeter=${wokeMeter}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();

        return json;
      },
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    });

  return { movie: data, isLoading, isFetching, error, fetchMovie: refetch };
};
