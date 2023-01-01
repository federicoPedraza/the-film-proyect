import { FC } from "react";
import { useLists } from "../../services/hooks/useLists";
import { FilmViewer } from "../../components/models/film-viewer";
import { Skeleton, Box } from '@mui/material';

const Lists:FC<{}> = () => {
    const{ watchLaterTV, watchLaterMovie, favoriteMovies, favoriteTV, loading } = useLists()
    
    if ( loading ){
        return <Box style={{display: 'flex', flexDirection: 'row', gap: '4rem', position: 'relative', bottom: 90}}>
            <Skeleton width={300} height={600} />
            <Skeleton width={300} height={600} />
            <Skeleton width={300} height={600} />
        </Box>
    }
    return (<>
        <FilmViewer films={favoriteMovies} label='Favorite movies'/>
        <FilmViewer films={favoriteTV} label='Favorite shows'/>
        <FilmViewer films={watchLaterTV} label="Shows watchlist"/>
        <FilmViewer films={watchLaterMovie} label="Movies watchlist"/>
    </>)
}

export default Lists