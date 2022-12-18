import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentViewer } from "../components/models/comment-viewer";
import { FilmViewer } from "../components/models/film-viewer";
import { ReviewResults } from "../interfaces/details.interface";
import { IFilm } from "../interfaces/film.interface";
import { getDetailReviews } from "../services/details.service";
import { getDiscoverMovies, getDiscoverTVShows, getTrendingFilms } from "../services/film.service";

const Details: FC<{}> = () => {
  const [loadingReviews, setLoadingReviews] = useState<boolean>(true)
  const [reviews, setReviews] = useState<ReviewResults[]>([]);
  const { movieId } = useParams()
  const handleInitialCall = async () => {
    const reviews = await getDetailReviews(String(movieId));
    setReviews(reviews)
    setLoadingReviews(false)
  } 

  useEffect(() => {
    if(movieId)
    handleInitialCall();
  }, []);

  return (
    <Box sx={{ margin: '30px' }}>
      <CommentViewer comments={reviews} loading={loadingReviews} />
    </Box>
  );
};
export default Details