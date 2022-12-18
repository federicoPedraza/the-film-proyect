import { Input, OutlinedInputProps, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { UIStyles } from "../../theme/globalStyles"
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment } from "@material-ui/core";

export interface ISearchField {
    onSearchChange: any | null;
} 

export const SearchField = (props: ISearchField) => {
    const { onSearchChange } = props;
    const { searchContainer } = UIStyles();

    return (
        <Paper className={searchContainer}>
            <Input 
                sx={{ height: '100%'}}
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