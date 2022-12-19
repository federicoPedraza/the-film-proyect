import { useState } from "react";
import { useParams } from "react-router-dom";
import useSession from "../../store";
import { addToFavorites, getIdMediaInformation } from "../lists.service";

export function useDetail() {
  const { film_type } = useParams();
  const [loadingFavorite, setLoadingFavorite] = useState<boolean>(false);
  const [loadingMedia, setLoadingMedia] = useState<boolean>(false)
  const { session_id, user_data } = useSession()
  const handleFavorite = async (favorite:boolean=false, id?: number, ) => {
    setLoadingFavorite(true);
    try {
        if ( user_data?.id && session_id && id && film_type && !loadingMedia){
            await addToFavorites(user_data.id, session_id,  film_type , id, favorite);
        }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingFavorite(false);
    }
  };

  const getMedia = async(id?:number) => {
    setLoadingMedia(true)
    try {
        if ( user_data?.id && session_id && id && film_type){
          const response = await getIdMediaInformation(id,session_id,film_type)
          console.log(response)
        }
    } catch (error) {
      console.error(error)
    } finally{
      setLoadingMedia(false)
    }
  }

  return {
    getMedia,
    loadingMedia,
    handleFavorite,
    loadingFavorite,
  };
}
