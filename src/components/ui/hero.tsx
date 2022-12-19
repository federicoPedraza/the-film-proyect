import { FC, useEffect, useState } from 'react';
import { Grid, Box, CardMedia, Typography, Divider, Paper } from '@material-ui/core';
import { HeroComponent } from '../../interfaces/details.interface';
import { HeroStyle } from '../../theme/globalStyles';
import Genres from './chips-container';
import { useDetail } from '../../services/hooks/useDetail';
import { FavoriteButton } from './favorite-button';
import { getImage, isFilmNew, isFilmPopular } from '../../utils/film-helper';
import { ButtonWithTooltip } from './tooltipped-button'
import { Dialog } from './dialog';
import  Confetti  from 'react-confetti';
import { WatchProvider } from '../models/watchprovider';
import ReactSound from 'react-sound';
export const Hero: FC<HeroComponent> = ({ details }) => {
  const {
    genres,
    id,
    tagline,
    popularity,
    poster_path,
    title, name, overview, release_date
  } = details
  const {
    accountOptions,
    getMedia,
    handleFavorite,
    actions,
    streamingModalOpen,
    handleStreamingModalClose,
    providers,
    getProviders
  } = useDetail()

  const [ soundStatus, setSoundStatus ] = useState<any>("STOPPED")
  const [ isGodPresent, setIsGodPresent ] = useState<boolean>(id === 213762)

  useEffect(()=>{
    setIsGodPresent( id === 213762 )
    if ( id=== 213762 ){
      setSoundStatus("PLAYING")
    }
  },[id, handleFavorite])


  const { favorite, rated, watchlist } = accountOptions
  useEffect(() => {
    getMedia(id)
  }, [id])

  const { title: titleStyle } = HeroStyle()

  return (
    <Paper elevation={20} style={{ padding: '5px', overflowX: 'hidden' }}>
      {isGodPresent && <><Confetti width={800} colors={['#87CEEB', '#FFFFFF']} /><ReactSound url='/song.mp3' playStatus={soundStatus}/></>}
      <Grid container style={{ margin: '10px', display: 'flex', flexDirection:'row'}}>
        <Grid item xs={11} md={3}>
          <Box>
            <CardMedia height={610} style={{ objectFit: 'contain' }} component="img" image={getImage(poster_path)} />
          </Box>
        </Grid>
        <Grid item  xs={1}/>
        <Grid item xs={7} >
          <Grid container style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
            <Grid item style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <Box className={titleStyle}>
                <FavoriteButton
                  active={favorite || false}
                  favoriteFn={() => handleFavorite(!favorite, id)}/>
                <Typography component='h1' variant='h4'>
                  {title || name}
                </Typography>
              </Box>
              <Grid container style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
              { release_date ? (
                    <Grid item>
                      <Paper style={{ backgroundColor: '#1D1C1D', width: '140px' }}>
                        <Typography variant="body1" align='center'>
                          {release_date}
                        </Typography>
                      </Paper>
                    </Grid>
                  ) : (<></>) }
                <Grid item>
                  <Paper style={{ backgroundColor: '#1D1C1D', width: '180px' }}>
                    <Typography variant="body1" align='center'>
                      Popularity: {Math.floor(popularity || 0)}
                    </Typography>
                  </Paper>
                </Grid>
                  { isFilmPopular(popularity) ? (
                    <Grid item>
                      <Paper style={{ backgroundColor: '#1D1C1D', width: '140px' }}>
                        <Typography variant="body1" style={{ color: '#F26419' }} align='center'>
                          TRENDING
                        </Typography>
                      </Paper>
                    </Grid>
                  ) : (<></>) }
                  { isFilmNew(release_date) ? (
                    <Grid item>
                      <Paper style={{ backgroundColor: '#1D1C1D', width: '140px' }}>
                        <Typography variant="body1" align='center'>
                          NEW
                        </Typography>
                      </Paper>
                    </Grid>
                  ) : (<></>) }
              </Grid>
            </Grid>
            <Grid item>
              <Box className={titleStyle}>
                <Box style={{ padding: '5px' }}>
                  <Typography component='h3' variant='h6'>
                    {overview}
                  </Typography>
                </Box>  
              </Box>
            </Grid>
            <Grid item style={{ marginTop: '23px'}}>
              <Grid container>
                {actions.map(({ icon, tooltipMessage }) => {
                  return <Grid item style={{ marginRight: '20px'}}>
                    <ButtonWithTooltip icon={icon} tooltipMessage={tooltipMessage} />
                  </Grid>
                })}
              {genres && <Genres categories={genres} />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {id &&
      <Dialog 
        onOpen={()=>getProviders(id)}
        isOpen={streamingModalOpen}
        onClose={handleStreamingModalClose}
        content={<WatchProvider results={providers?.results}/>}
        />}
    </Paper>
  );
};

