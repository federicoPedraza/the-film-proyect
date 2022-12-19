import { Grid, Box } from '@material-ui/core';
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";

const ProfileLayout: FC<{}> = () => {
  return (
    <Grid style={{marginTop:'5rem'}}container direction="row" justifyContent="space-around" alignItems="center">
      <Grid xs={3} style={{ height: '70vh' }}>
        <Menu />
      </Grid>
      <Grid xs={8} style={{ height: '70vh' }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
export default ProfileLayout;
