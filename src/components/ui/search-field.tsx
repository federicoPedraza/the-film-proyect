import { UIStyles } from "../../theme/globalStyles"
import SearchIcon from '@mui/icons-material/Search';
import { Input, InputAdornment, Paper } from "@mui/material";

export interface ISearchField {
    onSearchChange: any | null;
} 

export const SearchField = (props: ISearchField) => {
    const { onSearchChange } = props;
    const { searchContainer } = UIStyles();

    return (
        <Paper variant="elevation" elevation={15} className={searchContainer}>
            <Input 
                style={{ height: '100%'}}
                fullWidth 
                type="text" 
                placeholder="Search movies or TV shows"
                startAdornment={(
                    <InputAdornment position="start">
                        <SearchIcon sx={{ marginLeft: '14px' }} fontSize="small" />
                    </InputAdornment>
                )}   
                onChange={onSearchChange} 
             />
        </Paper>
    )
}