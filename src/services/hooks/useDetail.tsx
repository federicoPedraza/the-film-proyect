import { useState } from "react";
import { useParams } from "react-router-dom";
import { AccountOptionsInterface } from "../../interfaces/details.interface";
import { AccountStatesRes } from "../../interfaces/services/rest.interface";
import useSession from "../../store";
import { addToFavorites, getIdMediaInformation } from "../lists.service";

export function useDetail() {
  const { film_type } = useParams();
  const [loadingFavorite, setLoadingFavorite] = useState<boolean>(false);
  const [loadingMedia, setLoadingMedia] = useState<boolean>(false)
  const [accountOptions, setAccountOptions ] = useState<AccountStatesRes>(accountOptionsDefault)
  const { session_id, user_data } = useSession()
  const handleFavorite = async (favorite:boolean=false, id?: number, ) => {
    if ( loadingMedia ){
      console.log( 'espera, esta cargandp')
      return 
    }
    setLoadingFavorite(true);
    try {
        if ( user_data?.id && session_id && id && film_type){
            const result = await addToFavorites(user_data.id, session_id,  film_type , id, favorite);
            if (result.status === 201 || result.status === 200){
              // Update media if it was added sucesfully
              await getMedia(id)
            }
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
      console.log(user_data?.id ,session_id , id, film_type)
        if ( user_data?.id && session_id && id && film_type){
          const response = await getIdMediaInformation(id,session_id,film_type)
          setAccountOptions(response?.data)
        }
    } catch (error) {
      console.error(error)
    } finally{
      setLoadingMedia(false)
    }
  }


  return {
    accountOptions,
    getMedia,
    loadingMedia,
    handleFavorite,
    loadingFavorite,
  };
}


const accountOptionsDefault:AccountStatesRes ={
  favorite: false,
  id: 0,
  rated: false,
  watchlist: false,
}