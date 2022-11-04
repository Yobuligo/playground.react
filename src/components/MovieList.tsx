import IMovie from "../models/Movie";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

export const MovieList: React.FC<{ movies: IMovie[] }> = (props) => {
  const items = props.movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });
  return <main className={styles.movieList}>{items}</main>;
};