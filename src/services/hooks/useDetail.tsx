import { Provider, useState } from "react";
import { useParams } from "react-router-dom";
import { AccountOptionsInterface, ProviderResults } from "../../interfaces/details.interface";
import { AccountStatesRes } from "../../interfaces/services/rest.interface";
import { BooleanOptions } from "../../interfaces/ui.interface";
import useSession from "../../store";
import { addToFavorites, getIdMediaInformation } from "../lists.service";

import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { getFilmProviders } from "../details.service";
export function useDetail() {
  const { film_type } = useParams();
  const [loadingFavorite, setLoadingFavorite] = useState<boolean>(false);
  const [loadingMedia, setLoadingMedia] = useState<boolean>(false)
  const [loadingProviders, setLoadingProviders] = useState<boolean>(false)
  const [accountOptions, setAccountOptions ] = useState<AccountStatesRes>(accountOptionsDefault)
  const { session_id, user_data } = useSession()
  
  const [hover, setHover] = useState<BooleanOptions>(defaultOptionsHover); //Actions
  const [streamingModalOpen, setStreamingModalOpen] = useState<boolean>(false);

  const [providers, setProviders] = useState<ProviderResults>()

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

  const getProviders = async(id: number)=>{
     setLoadingProviders(true)
    try {
      console.log(id, film_type)
        if ( id && film_type){
          const response = await getFilmProviders(id,film_type)
          setProviders(response?.data)
        }
    } catch (error) {
      console.error(error)
    } finally{
      setLoadingProviders(false)
    }
  }

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

  const handleStreamingModalClose = () => {
    setStreamingModalOpen(false)
  }
const actions = [
    {
      icon: <LiveTvIcon 
      onClick={()=>setStreamingModalOpen(true)}
      fontSize='large' style={{
        cursor: 'pointer',
        fill: hover.streaming ? '#BA1F33' : '#FFF',
        transition: 'fill 0.3s ease-out'
      }}
        onMouseEnter={() => setHover({ ...hover, streaming: true })}
        onMouseLeave={() => setHover({ ...hover, streaming: false })}
      />,
      tooltipMessage: 'Watch'
    },
    {
      icon: <WatchLaterIcon
        fontSize='large'
        style={{
          cursor: 'pointer',
          fill: hover.watchLater ? '#BA1F33' : '#FFF',
          transition: 'fill 0.3s ease-out'
        }}
        onMouseEnter={() => setHover({ ...hover, watchLater: true })}
        onMouseLeave={() => setHover({ ...hover, watchLater: false })}
      />,
      tooltipMessage: 'Watch later'
    }]

  return {
    accountOptions,
    getMedia,
    loadingMedia,
    handleFavorite,
    loadingFavorite,
    actions,
    streamingModalOpen,
    handleStreamingModalClose,
    getProviders,
    loadingProviders,
    providers
  };
}


const accountOptionsDefault:AccountStatesRes ={
  favorite: false,
  id: 0,
  rated: false,
  watchlist: false,
}
const defaultOptionsHover: BooleanOptions = { watchLater: false, streaming: false }