import { Box, FormControl, Input, InputLabel, Button, TextField } from "@material-ui/core";
import { ChangeEvent, FC, useState } from "react";
import { UIStyles } from "../../theme/globalStyles";

const Login: FC<{}> = () => {
  const { loginForm, loginFormContainer, input } = UIStyles();

  const [body, setBody] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const handleBody = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setBody({ ...body, [id]: value });
  };

  const handleSubmit = () => {
    console.log(body);
  }

  return (
    <Box className={loginFormContainer}>
      <FormControl className={loginForm}>
        <TextField
          variant="outlined"
          label="Username"
          className={input}
          value={body.username}
          id="username"
          onChange={handleBody}
          autoFocus/>
        <TextField
          variant="outlined"
          label="Password"
          className={input}
          value={body.password}
          id="password"
          onChange={handleBody}/>
        <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">
          Login
        </Button>
      </FormControl>
    </Box>
  );
};
export default Login;
