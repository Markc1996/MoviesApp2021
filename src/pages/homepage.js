import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const HomePage = (props) => {
  const context = useContext(MoviesContext);
  const { movies  } = context;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};

export default HomePage;