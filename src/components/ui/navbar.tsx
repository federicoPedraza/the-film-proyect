import { FC, memo, ReactNode, useEffect, useState } from 'react';
import { AppBar, Avatar, Button, ButtonGroup, Paper, Toolbar, Typography } from '@material-ui/core';
import { useUser } from '../../services/hooks/useUser';
import { AvatarMenu } from './menu';
import { UIStyles } from '../../theme/globalStyles';
import { useNavigate } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Navbar: FC<{}> = ({ }) => {
  const navigate = useNavigate()
  const { appBar, pageHeader } = UIStyles();
  const { userData, session_id } = useUser();
  const { hash: avatar } = userData.avatar.gravatar
  const { username } = userData
  const [avatarElement, setAvatarElement] = useState<ReactNode>(<AccountCircleRoundedIcon  fontSize='large'  />)


  useEffect(() => {
    if (session_id && avatar) {
      setAvatarElement(<Avatar
        src={avatar}
        alt={`avatar de ${username}`}
      />)
    }
    if (!session_id ){
      setAvatarElement(<AccountCircleRoundedIcon fontSize='large' />)
    }
  }, [avatar, session_id])

  const options: Record<string, string>[] = session_id ? loggedOptions : unloggedOptions

  return (
    <AppBar style={{ zIndex: "99" }} position="static" elevation={20} color="primary">
      <Toolbar className={appBar}>
        <Button className={pageHeader} variant="contained" onClick={() => navigate('/')}>
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


const unloggedOptions: Record<string, string>[] = [
  { title: 'Login', target: 'authorize' },
]

const loggedOptions: Record<string, string>[] = [
  { title: 'Profile', target: 'profile/overview' },
  { title: 'Logout', target: 'profile/logout' },
]