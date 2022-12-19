import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CommentViewer } from "../components/models/comment-viewer";
import { Hero as MovieHero } from "../components/ui/hero";
import { DetailsInterface, ReviewResults } from "../interfaces/details.interface";
import { ApiResponse } from "../interfaces/services/rest.interface";
import { getFilmDetails } from "../services/details.service";

const Details: FC<{}> = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(true)
  const [heroDetails, setHeroDetails ] = useState<DetailsInterface>(defaultDetail)
  const [reviews, setReviews] = useState<ReviewResults[]>([]);
  const { film_id, film_type } = useParams()


  const handleInitialCall = async () => {
    const result:ApiResponse<DetailsInterface> = await getFilmDetails(Number(film_id), film_type);
    const { status, data } = result
    if ( status === 200 ){
      const { reviews } = data
      if ( reviews?.results ){
        setReviews(reviews?.results)
        setHeroDetails(data)
      }
    }
    const extraTimer = setTimeout(() => {
      setLoading(false)
    }, 1200);
    return ()=>clearTimeout(extraTimer)
  } 

  useEffect(() => {
    if( film_id ) {
      setLoading(true)
      handleInitialCall();
      return
    }
    navigate('/') // if no film just return
  }, []);

  return (
    <Box sx={{ margin: '70px'}}>
      <MovieHero details={heroDetails}  />
      <CommentViewer comments={reviews} loading={loading} />
    </Box>
  );
};
export default Details

const defaultDetail = {
  title: '',
}