import { useEffect, useState } from "react"
import { IFilm, MediaType } from "../../interfaces/film.interface"
import useSession from "../../store"
import { getFavoriteFilms, getWatchlist } from "../film.service"

export function useLists() {
    const [ favoriteMovies, setFavoriteMovies] = useState<IFilm[]>([])
    const [ favoriteTV, setFavoriteTV] = useState<IFilm[]>([])
    const [ watchLaterTV, setWatchLaterTV ] = useState<IFilm[]>([])
    const [ watchLaterMovie, setWatchLaterMovie ] = useState<IFilm[]>([])
    const [ loading, setLoading ] = useState<boolean>(false)

    const { user_data, session_id } = useSession()


    const handleWatchList = async(media_type: MediaType) => {
        if ( !user_data || !session_id ){
            console.error('Aborted: missing data');
            return null;
        }
        setLoading(true)
        try {
            const { status, data } = await getWatchlist(user_data?.id,session_id,media_type)
            if ( status === 200  && data.results){
                if ( media_type === MediaType.Movie){
                    setWatchLaterMovie(data.results)
                }
                if ( media_type === MediaType.TV){
                    setWatchLaterTV(data.results)
                }
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const getFavoriteList = async(media_type: MediaType) => {
        if ( !user_data || !session_id ){
            console.error('Aborted: missing data');
            return null;
        }
        setLoading(true)
        try {
            const { status, data } = await getFavoriteFilms(user_data?.id,session_id,media_type)
            if ( status === 200  && data.results){
                if ( media_type === MediaType.Movie){
                    setFavoriteMovies(data.results)
                }
                if ( media_type === MediaType.TV){
                    setFavoriteTV(data.results)
                }
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getFavoriteList(MediaType.Movie)
        getFavoriteList(MediaType.TV)
        handleWatchList(MediaType.Movie)
        handleWatchList(MediaType.TV)
    },[])

    return { watchLaterTV, watchLaterMovie, favoriteMovies, favoriteTV, loading }
}