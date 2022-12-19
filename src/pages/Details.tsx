import { Divider, IconButton, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { CommentViewer } from "../components/models/comment-viewer";
import { Hero as MovieHero } from "../components/ui/hero";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { DetailsInterface, ReviewResults } from "../interfaces/details.interface";
import { ApiResponse } from "../interfaces/services/rest.interface";
import { getDetailReviews, getFilmDetails } from "../services/details.service";

const Details: FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [heroDetails, setHeroDetails ] = useState<DetailsInterface>(defaultDetail)
  const [reviews, setReviews] = useState<ReviewResults[]>([]);
  const { film_id, film_type } = useParams()
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/')
  }

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
    setLoading(false)
  } 

  useEffect(() => {
    if(film_id)
    handleInitialCall();
  }, []);

  return (
    <Box sx={{ marginTop: '30px', marginLeft: '15px'}}>
      <IconButton onClick={navigateHome} style={{ marginBottom: '5px' }}>
        <ArrowBackIosNewIcon />
        <Typography variant="h6">
          Home 
        </Typography>
      </IconButton>
      <MovieHero details={heroDetails} />
      <Divider style={{ margin: '25px' }} />
      <Box style={{ width: '95%', marginBottom: '15px'}}>
        <Typography variant="h4">
          Comments: 
        </Typography>
        <CommentViewer comments={reviews} loading={loading} />
      </Box>
    </Box>
  );
};
export default Details

const defaultDetail = {
  title: '',
}