import FavoriteIcon from '@mui/icons-material/Favorite';
import useSession from '../../store';
import { UIStyles } from '../../theme/globalStyles';

export interface IFavoriteButton {
    active: boolean;
    favoriteFn: () => Promise<void>;
}

export const FavoriteButton = ({active, favoriteFn}: IFavoriteButton) => {
    const { session_id } = useSession()
    const { favoriteHearthFilled, favoriteHearth } = UIStyles()
    return <FavoriteIcon 
    fontSize='large'
    className={active ? favoriteHearthFilled : favoriteHearth} 
    onClick={favoriteFn} />
};