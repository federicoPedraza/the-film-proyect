import { FC, memo} from 'react';
import { AppBar, Avatar, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useUser } from '../../services/hooks/useUser';
import { SmallMenu } from './menu';
import { UIStyles } from '../../theme/globalStyles';
import { useNavigate } from 'react-router-dom';

const Navbar: FC<{}> = ({  }) => {
  const { appBar, pageHeader, appBarButtons, button } = UIStyles();
  const { isValid } = useUser();
  const navigate = useNavigate()
  const handleButtonClick = (route: string) => {
    navigate(route);
  };
  return (
    <AppBar position="static" elevation={4} color="primary">
      <Toolbar className={appBar}>
        <Typography className={pageHeader} noWrap variant="h4">
          The <i>Film</i> Project
        </Typography>
        <ButtonGroup size="large" variant="text" className={appBarButtons}>
      
          <Button 
          className={button} 
          onClick={()=>handleButtonClick('')}
          >
            Home
          </Button>
          <Button 
          className={button} 
          onClick={()=>handleButtonClick('movies')}
          >
            Movies
          </Button>
          <Button 
          className={button} 
          onClick={()=>handleButtonClick('shows')}
          >
            TV
          </Button>
        </ButtonGroup>
        <div>
          {!isValid ? (
            <SmallMenu menuText="Login" />
          ) : (
            <IconButton  color="inherit" aria-label="Login icon">
            <Avatar alt="Profile">N</Avatar>
            </IconButton>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
