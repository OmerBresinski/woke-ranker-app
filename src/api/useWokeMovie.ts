import { useQuery } from "@tanstack/react-query";

interface IUseWokeMovie {
  search: string;
  wokeMeter: number;
}

export interface GrokResponse {
  movieName: string;
  wokeScore: number;
  summary: string;
  headline: string;
  poster: string;
}

export const useWokeMovie = ({ search, wokeMeter }: IUseWokeMovie) => {
  const { data, isLoading, isFetching, error, refetch } =
    useQuery<GrokResponse>({
      queryKey: ["woke-movie", search],
      queryFn: async ({ queryKey }) => {
        const [, movieName] = queryKey;
        const response = await fetch(
          `http://localhost:3000/${movieName}&wokeMeter=${wokeMeter}`
        );
        const json = await response.json();

        return json;
      },
      enabled: false,
    });

  return {
    data,
    error,
    isLoading,
    isFetching,
    fetchMovie: refetch,
    currentMovie: search,
  };
};
