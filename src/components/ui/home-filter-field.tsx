import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { MediaType } from "../../interfaces/film.interface";
import { IHomeFilterField } from "../../interfaces/ui.interface";

export const HomeFilterField = (props: IHomeFilterField) => {
    const { onFilterChange } = props;

    return (
        <FormControl>
            <RadioGroup onChange={onFilterChange} row defaultValue='all'> 
                <FormControlLabel value={MediaType.All} control={<Radio />} label="All" />
                <FormControlLabel value={MediaType.Movie} control={<Radio />} label="Movies" />
                <FormControlLabel value={MediaType.TV} control={<Radio />} label="TV Shows" />
            </RadioGroup>
        </FormControl>
    )
}