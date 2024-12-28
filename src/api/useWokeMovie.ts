import { useQuery } from "@tanstack/react-query";

interface IUseWokeMovie {
  search: string;
}

export const useWokeMovie = ({ search }: IUseWokeMovie) => {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["woke-movie", search],
    queryFn: async ({ queryKey }) => {
      const [, movieName] = queryKey;
      await new Promise((resolve) => setTimeout(resolve, 6000));

      return { movieName };
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
