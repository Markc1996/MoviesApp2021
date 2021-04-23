import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  const context = useContext(MoviesContext);
  const { movies } = context;
  const favoriteMovies = movies.filter((m) => m.favorite);

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={favoriteMovies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;