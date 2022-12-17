import { FC, useEffect } from "react";
import { login } from "../services/authentication.service";
import { getMovie } from "../services/movies.service";

const Welcome: FC<{}> = () => {
  const getInitial = async() => {
    try {
      const movie = await getMovie(550);
      console.log(`Título: ${movie.title}`);
      console.log(`Sinopsis: ${movie.overview}`);
      console.log(`Fecha de estreno: ${movie.release_date}`);
    } catch (error) {
      console.error(error);
    }
    }
  useEffect(()=>{
    getInitial()
  },[])
  return (
    <h1 onClick={()=>login()}>Home</h1>
  );
};
export default Welcome