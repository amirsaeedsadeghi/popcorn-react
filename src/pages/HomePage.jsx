import Header from "../components/Header";
import MovieTable from "../features/movies/MovieTable";

function HomePage() {
  return (
    <div className="container">
      <Header />
      <main>
        <MovieTable />
      </main>
    </div>
  );
}

export default HomePage;
