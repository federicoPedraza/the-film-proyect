import { FormControl, Input, InputLabel } from "@material-ui/core";
import { FC } from "react";
import { UIStyles } from "../../theme/globalStyles";
const Login: FC<{}> = () => {
  return (
    <FormControl className={UIStyles().loginForm}>
      <InputLabel htmlFor="username-input">Username</InputLabel>
      <Input id="username-input"/>
    </FormControl>
  );
};
export default Login