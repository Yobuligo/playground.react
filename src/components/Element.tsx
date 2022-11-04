import { useState } from "react";

export const Element: React.FC = () => {
  const [movies, setMovies] = useState();
  fetch("https://swapi.dev/api/films/")
    .then((response) => {
      return response.json;
    })
    .then((data: any) => {
      const transformedData = data.results.map((movieData: any) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedData);
    });



  return <></>;
};
