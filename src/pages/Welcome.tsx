import { FC, useEffect } from "react";
import { login } from "../services/authentication.service";
import { getGenresList, getMovie } from "../services/movies.service";
import useSession from "../store";

const Welcome: FC<{}> = () => {
  const { setSession } = useSession();
  const handleClick = async () => {
    const response = await getGenresList();
    console.log(response)
  };
  return (
    <h1 onClick={handleClick}>Home</h1>
  );
};
export default Welcome