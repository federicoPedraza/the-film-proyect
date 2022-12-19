import { FC, memo, ReactNode } from 'react';
import { AppBar, Avatar, Button, ButtonGroup, Paper, Toolbar, Typography } from '@material-ui/core';
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

  return (
    <AppBar style={{ zIndex: "99" }} position="static" elevation={20} color="primary">
      <Toolbar className={appBar}>
        <Button className={pageHeader} variant="contained" onClick={()=>navigate('/')}>
          <Typography noWrap variant="h4" component="h1">
            The Film Project
          </Typography>
        </Button>

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
  { title: 'Profile', target: 'profile/overview'},
  { title: 'Logout', target: 'profile/logout'},
]