import { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList";
import IMovie from "./models/Movie";

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([
    {
      id: 1,
      episodeId: 1,
      openingText: "Any Opening Text",
      title: "My Title",
    },
  ]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        const movies: IMovie[] = data.results.map((movieData: any) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            episodeId: movieData.episode_id,
            openingText: movieData.opening_crawl,
          };
        });
        setMovies(movies);
      });
  }, []);

  return (
    <>
      <header>
        <h2>Movie Overview</h2>
      </header>
      <MovieList movies={movies} />
    </>
  );
};

export default App;
