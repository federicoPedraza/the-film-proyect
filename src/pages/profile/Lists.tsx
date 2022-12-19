import { FC } from "react";
import { useLists } from "../../services/hooks/useLists";
import { FilmViewer } from "../../components/models/film-viewer";
const Lists:FC<{}> = () => {
    const { getFavoriteList, favoriteMovies, favoriteTV, loading } = useLists()
    
    if ( loading ){
        return <>loading</>
    }
    return (<>
        <FilmViewer films={favoriteMovies} label='Favorite movies'/>
        <FilmViewer films={favoriteTV} label='Favorite shows'/>
    </>)
}

export default Lists