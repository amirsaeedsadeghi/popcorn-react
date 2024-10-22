import { useMovies } from "./useMovies";
import styled from "styled-components";
import Spinner from "../../components/Spinner";
import MovieCard from "./MovieCard";
import Pagination from "../../components/Pagination";
import Empty from "../../components/Empty";
import Footer from "../../components/Footer";

const StyledMovieTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  max-width: 1200px;
  margin: auto;
  padding: 10px;
`;

function MovieTable() {
  const { movies, count, isLoading } = useMovies();

  if (isLoading) return <Spinner />;
  if (!movies.length) return <Empty resourceName="movies" />;
  return (
    <>
      <StyledMovieTable>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </StyledMovieTable>
      <Footer>
        <Pagination count={count} />
      </Footer>
    </>
  );
}

export default MovieTable;
