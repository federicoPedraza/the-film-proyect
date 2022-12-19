import { FC, useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { getRequestToken } from "../../services/authentication.service";
import { Typography } from "@material-ui/core";

const RequestTokenLoader: FC<{}> = () => {
  const [loading, setLoading] = useState(true);
  const handleRequestToken = async () => {
    setLoading(true);
    const response = await getRequestToken();
    console.log(response);
    if (response) {
      if (response.success) {
        const url = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:3000/authorize`;
        window.location.replace(url);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    handleRequestToken();
  }, []);
  if (loading) {
    return <>
      <LinearProgress color='secondary' />
      <Typography>Validando token de la app, por favor espere...</Typography>
    </>
  }
  return (
    <>
      
    </>
  );
};
export default RequestTokenLoader;
