import React from "react";
import { storiesOf } from "@storybook/react";
import MovieCard from "../src/components/movieCard";
import FilterMoviesCard from "../src/components//filterMoviesCard";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails/";
import MovieHeader from "../src/components/headerMovie/";
import SiteHeader from '../src/components/siteHeader'
import Grid from "@material-ui/core/Grid";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg",
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 28,
      name: "Action",
    },
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US",
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US",
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692,
};

storiesOf("Home Page/MovieCard", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={(movie) => (
        <button className="btn w-100 btn-primary">Test</button>
      )}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={(movie) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterMoviesCard", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator((story) => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterMoviesCard onUserInput={action("filter input")} />
  ));

storiesOf("Home Page/Header", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MoviesHeader title="Discover Movies" />);

storiesOf("Home Page/MovieList", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [
      { ...sample, id: 1 },
      { ...sample, id: 2 },
      { ...sample, id: 3 },
      { ...sample, id: 4 },
      { ...sample, id: 5 },
    ];
    return (
      <Grid container spacing={5}>
        <MovieList
          movies={movies}
          action={(movie) => (
            <IconButton
              aria-label="add to favorites"
              onClick={action("Perform Action")}
            >
              <FavoriteIcon color="primary" fontSize="large" />
            </IconButton>
            // <button className="btn w-100 btn-primary">Test</button>
          )}
        />
      </Grid>
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);


storiesOf("App Header", module)
.addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <SiteHeader />);