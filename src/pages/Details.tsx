import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentViewer } from "../components/models/comment-viewer";
import { Hero as MovieHero } from "../components/ui/hero";

import { DetailsInterface, ReviewResults } from "../interfaces/details.interface";
import { ApiResponse } from "../interfaces/services/rest.interface";
import { getDetailReviews, getFilmDetails } from "../services/details.service";

const Details: FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [heroDetails, setHeroDetails ] = useState<DetailsInterface>(defaultDetail)
  const [reviews, setReviews] = useState<ReviewResults[]>([]);
  const { film_id, film_type } = useParams()

  const handleInitialCall = async () => {
    const result:ApiResponse<DetailsInterface> = await getFilmDetails(String(film_id), film_type);
    const { status, data } = result
    if ( status === 200 ){
      const { reviews } = data
      if ( reviews?.results ){
        setReviews(reviews?.results)
        setHeroDetails(data)
      }
    }
    setLoading(false)
  } 

  useEffect(() => {
    if(film_id)
    handleInitialCall();
  }, []);

  return (
    <Box sx={{ margin: '70px'}}>
      <MovieHero details={heroDetails} />
      <CommentViewer comments={reviews} loading={loading} />
    </Box>
  );
};
export default Details

const defaultDetail = {
  title: '',
}