import { Chip, IconButton, Tooltip } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { FC } from "react";
import { Genres as GernesInterface } from "../../interfaces/ui.interface";
import { UIStyles } from "../../theme/globalStyles";

const Genres: FC<GernesInterface> = ({ categories }) => {
    const { favoriteHearth } = UIStyles()
    return (
        <>
            {categories.map(({ name, id }) => (
                <Tooltip title="Añadir género a favorito" key={`tooltip-${id}`}>
                    <Chip
                        label={name}
                        key={`label-${id}`}
                        icon={
                            <IconButton onClick={()=>console.log('a')}>
                                <Favorite className={favoriteHearth} />
                            </IconButton>
                        }
                    />
                </Tooltip>
            ))}
        </>
    );
};

export default Genres