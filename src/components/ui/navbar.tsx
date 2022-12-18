import { FC, memo, ReactNode } from 'react';
import { AppBar, Avatar, Box, Button, ButtonGroup, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useUser } from '../../services/hooks/useUser';
import { AvatarMenu } from './menu';
import { UIStyles } from '../../theme/globalStyles';
import { useNavigate } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Navbar: FC<{}> = ({ }) => {
  const navigate = useNavigate()
  const { appBar, pageHeader, appBarButtons, button } = UIStyles();
  const { loading, userData } = useUser();
  const { hash: avatar } = userData.avatar.gravatar
  const { username } = userData


  const avatarElement:ReactNode = (avatar ? <Avatar
    src={avatar}
    alt={`avatar de ${username}`}
  /> : <AccountCircleRoundedIcon />)

  const options:Record<string,string>[] = avatar ? loggedOptions : unloggedOptions

  const handleButtonClick = (route: string) => {
    navigate(route);
  };

  return (
    <AppBar position="static" elevation={20} color="secondary">
      <Toolbar className={appBar}>
        <Button className={pageHeader} variant="contained" href="/">
          <Typography noWrap variant="h4" component="h1">
            The Film Project
          </Typography>
        </Button>

        <ButtonGroup size="large" variant="text" className={appBarButtons}>

          <Button
            className={button}
            onClick={() => handleButtonClick('')}
          >
            Home
          </Button>
          <Button
            className={button}
            onClick={() => handleButtonClick('movies')}
          >
            Movies
          </Button>
          <Button
            className={button}
            onClick={() => handleButtonClick('shows')}
          >
            TV
          </Button>
        </ButtonGroup>
        <div>
            <AvatarMenu
              avatar={avatarElement} 
              options={options}
              />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);


const unloggedOptions:Record<string,string>[] = [
  { title: 'Vincular cuenta', target: 'authorize'},
  { title: 'Ayuda', target: 'help'}
]

const loggedOptions:Record<string,string>[] = [
  { title: 'Mi perfil', target: 'profile/overview'},
  { title: 'Mis listas', target: 'profile/lists'},
  { title: 'Cerrar sesion', target: 'profile/logout'},
]