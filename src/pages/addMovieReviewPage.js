import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewform";
import useMovie from "../hooks/useMovie";

const WriteReviewPage = ({
  location: {
    state: { movieId },
  },
}) => {
  const [movie] = useMovie(movieId);

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
              <ReviewForm movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default WriteReviewPage;