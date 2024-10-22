import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMoviesApi } from "../../services/apiMovies";
import { useSearchParams } from "react-router-dom";

export function useMovies() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // SEARCH BY TITLE
  const searchTerms = searchParams.get('title') || "";
  // PAGINATION
  const page = Number(searchParams.get('page')) || 1;

  const { isLoading, error, data: { results: movies, total_results: count } = {} } = useQuery({
    queryKey: ['movies', searchTerms, page],
    queryFn: () => getMoviesApi({ searchTerms, page })
  });

  const pageRange = 20;
  const lastPage = Math.ceil(count / pageRange);
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", searchTerms, page - 1],
      queryFn: () => getMoviesApi({ searchTerms, page: page - 1 })
    })
  }
  if (page < lastPage) {
    queryClient.prefetchQuery({
      queryKey: ["movies", searchTerms, page + 1],
      queryFn: () => getMoviesApi({ searchTerms, page: page + 1 })
    })
  }
  return { movies, count, isLoading, error }

}