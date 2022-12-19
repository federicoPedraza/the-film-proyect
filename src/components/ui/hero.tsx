import { FC, useEffect, useState } from 'react';
import { Grid, Box, CardMedia, Typography, Divider } from '@material-ui/core';
import { HeroComponent } from '../../interfaces/details.interface';
import { HeroStyle } from '../../theme/globalStyles';
import moment from 'moment'
import { ProgressWithText } from './progress';
import Genres from './chips-container';
import { useDetail } from '../../services/hooks/useDetail';
import { FavoriteButton } from './favorite-button';
import { getImage } from '../../utils/film-helper';
import { ButtonWithTooltip } from './tooltipped-button'
import { Dialog } from './dialog';
import { WatchProvider } from '../models/watchprovider';
export const Hero: FC<HeroComponent> = ({ details }) => {
  const {
    genres,
    id,
    popularity,
    poster_path,
    title, name, overview, release_date
  } = details
  const {
    accountOptions,
    getMedia,
    loadingMedia,
    handleFavorite,
    loadingFavorite,
    actions,
    streamingModalOpen,
    handleStreamingModalClose,
    providers,
    loadingProviders,
    getProviders
  } = useDetail()



  const { favorite, rated, watchlist } = accountOptions
  useEffect(() => {
    getMedia(id)
  }, [id])

  const { title: titleStyle } = HeroStyle()
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Box >
            <CardMedia height={700} component="img" image={getImage(poster_path)} />
          </Box>
        </Grid>
        <Grid xs={1} />
        <Grid item xs={7}>
          <Box className={titleStyle}>
            <FavoriteButton
              active={favorite || false}
              favoriteFn={() => handleFavorite(!favorite, id)}
            />
            <Typography component='h1' variant='h5'>
              {title || name}
            </Typography>
            <Typography component='h2' variant='h6'>
              ({moment(release_date).year()})
            </Typography>
          </Box>

          <Box className={titleStyle}>
            <Typography component='h3' variant='body1'>
              {overview}
            </Typography>
          </Box>
          <Divider />
          <Grid container style={{ width: '25%' }}>
            {actions.map(({ icon, tooltipMessage }) => {
              return <Grid item xs={2}>
                <ButtonWithTooltip icon={icon} tooltipMessage={tooltipMessage} />
              </Grid>
            })}
          </Grid>
          {genres && <Genres categories={genres} />}
          {popularity && <ProgressWithText value={popularity} />}
          {popularity && <Typography>IMdb popularity: {popularity}</Typography>}
        </Grid>


      </Grid>
      {id &&
      <Dialog 
        onOpen={()=>getProviders(id)}
        isOpen={streamingModalOpen}
        onClose={handleStreamingModalClose}
        content={<WatchProvider results={providers?.results}/>}
        />}
    </>
  );
};

