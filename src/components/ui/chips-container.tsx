import { Chip, IconButton, Tooltip } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { FC } from "react";
import { Genres as GernesInterface } from "../../interfaces/ui.interface";
import { UIStyles } from "../../theme/globalStyles";

const Genres: FC<GernesInterface> = ({ categories }) => {
    return (
        <>
            {categories.map(({ name, id }) => (
                <Chip
                    label={name}
                    key={`label-${id}`}
                    style={{padding: 12, marginRight: '1rem'}}
                />
            ))}
        </>
    );
};

export default Genres