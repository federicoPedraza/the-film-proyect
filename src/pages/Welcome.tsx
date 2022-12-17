import { FC, useEffect } from "react";
import { getRequestToken, login } from "../services/authentication.service";
import useSession from "../store";

const Welcome: FC<{}> = () => {
  const { setSession } = useSession();
  const handleClick = async () => {
    const response = await getRequestToken();
    console.log(response)
    if ( response ){
      if ( response.success ){
        setSession(response.request_token, response.expires_at)
        console.log(response.request_token)
      }
    }
  };
  return (
    <>
    <h1 onClick={handleClick}>Home</h1>
    </>
  );
};
export default Welcome