import { FC, useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { getRequestToken } from "../../services/authentication.service";
import useSession from "../../store";
import { Typography } from "@material-ui/core";

const API_KEY = process.env.REACT_APP_API_V3_AUTH;
const RequestTokenLoader: FC<{}> = () => {
  const { setSession } = useSession();
  const [loading, setLoading] = useState(true);
  const handleRequestToken = async () => {
    setLoading(true); 
    const response = await getRequestToken();
    console.log(response);
    if (response) {
      if (response.success) {
        setSession(response.request_token, response.expires_at);
        const url = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:3000/authorize`;
        window.location.replace(url);
        }
    }
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  useEffect(() => {
    handleRequestToken();
  }, []);
  if ( loading ){
    return <>
      <LinearProgress color='secondary' />
      <Typography>Validando token de la app, por favor espere...</Typography>
    </>
  }
  return (
    <>
      Se ha validado con éxito
    </>
  );
};
export default RequestTokenLoader;
