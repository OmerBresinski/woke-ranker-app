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
      queryKey: ["woke-movie", search, wokeMeter],
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
