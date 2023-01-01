import { Chip } from "@mui/material";
import { FC } from "react";
import { Genres as GernesInterface } from "../../interfaces/ui.interface";

const Genres: FC<GernesInterface> = ({ categories }) => {
    return (
        <>
            {categories.map(({ name, id }) => (
                <Chip
                    label={name}
                    key={`label-${id}`}
                    style={{padding: '1rem', marginRight: '1rem', marginBottom: '1rem'}}
                />
            ))}
        </>
    );
};

export default Genres