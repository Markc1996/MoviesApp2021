import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homepage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";


const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />
      <div className="container-fluid">
      <MoviesContextProvider>
      <GenresContextProvider>
      <Switch>
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </GenresContextProvider>
      </MoviesContextProvider>
      </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));