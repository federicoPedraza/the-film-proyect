import FavoriteIcon from '@mui/icons-material/Favorite';
import { UIStyles } from '../../theme/globalStyles';

export interface IFavoriteButton {
    active: boolean;
    favoriteFn: () => Promise<void>;
}

export const FavoriteButton = ({active, favoriteFn}: IFavoriteButton) => {
    const { favoriteHearthFilled, favoriteHearth } = UIStyles()
    return <FavoriteIcon 
    className={active ? favoriteHearthFilled : favoriteHearth} 
    onClick={favoriteFn} />
};