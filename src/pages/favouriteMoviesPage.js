import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";

const FavoriteMoviesPage = () => {
  const context = useContext(MoviesContext);
  const { movies  } = context;
  const favoriteMovies = movies.filter(m => m.favorite  )

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={favoriteMovies}
      selectFavorite={toDo}
    />
  );
};

export default FavoriteMoviesPage;