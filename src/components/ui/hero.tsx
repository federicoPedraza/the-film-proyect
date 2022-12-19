import { FC, useState } from 'react';
import { Grid, Box, CardMedia, Typography } from '@material-ui/core';
import { HeroComponent } from '../../interfaces/details.interface';
import { getImage } from '../../utils/poster-helper';
import { HeroStyle, UIStyles } from '../../theme/globalStyles';
import moment from 'moment'
import { ProgressWithText } from './progress';
import { FastMenu } from './speed-dial';
import TryIcon from '@mui/icons-material/Try';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ShareIcon from '@mui/icons-material/Share';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Modal } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Tooltip } from "@material-ui/core";
import Genres from './chips-container';
import { useDetail } from '../../services/hooks/useDetail';
export const Hero: FC<HeroComponent> = ({ details }) => {
  const {
    genres,
    popularity,
    poster_path,
    title, name, overview, release_date
  } = details
  const {
    getMedia,
    loadingMedia,
    handleFavorite,
    loadingFavorite,
  } = useDetail()
  const { title: titleStyle } = HeroStyle()
  const [open, setOpen] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const { favoriteHearth } = UIStyles()
  return (
    <Grid container>
      <Grid item xs={4}>
        <Box>
          <CardMedia component="img" image={getImage(poster_path)} />
        </Box>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <Box className={titleStyle}>
          <FavoriteBorderIcon className={favoriteHearth} onClick={() => handleFavorite(true, details.id)} />
    
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
        <Box>
          <Tooltip title="Ver en streaming">
            <LiveTvIcon
              style={{
                cursor: 'pointer',
                fill: hover ? '#BA1F33' : '#FFF',
                transition: 'fill 0.3s ease-out'
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </Tooltip>
        </Box>
        {genres && <Genres categories={genres} />}
        {popularity &&
          <ProgressWithText value={popularity / 10} />}
        <FastMenu
          actions={actions}
          containerIcon={<TryIcon />}
          ariaLabel='Acciones'
        />
      </Grid>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div>
          <button onClick={() => setOpen(false)}>Cerrar</button>
        </div>
      </Modal>

    </Grid>
  );
};


const actions = [
  { icon: <StarOutlineIcon />, name: 'Guardar a favoritos' },
  { icon: <FolderSpecialIcon />, name: 'Añadir a una lista' },
  { icon: <WatchLaterIcon />, name: 'Ver después' },
  { icon: <ShareIcon />, name: 'Compartir' },
];