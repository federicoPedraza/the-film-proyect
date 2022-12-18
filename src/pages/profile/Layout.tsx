
import { Grid, Box, Paper } from '@material-ui/core';
import { FC } from "react";
import { BoxProps } from '@material-ui/core/Box';
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";

const ProfileLayout: FC<{}> = () => {
  return <Grid 
  container 
  direction='row' 
  justifyContent='space-around' 
  alignItems='center'
  >
      <Paper>
        <Menu />
      </Paper>
      <Paper>
        <Outlet />
      </Paper>
  </Grid>
};
export default ProfileLayout