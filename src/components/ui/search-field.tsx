import { useState } from "react";
import { UIStyles } from "../../theme/globalStyles"
import { FormControl, Input } from "@material-ui/core";

export const Search = (props: any) => {
    const { searchContainer } = UIStyles();
    const [ searchValue, setSearchValue ] = useState('');
    
    const handleSearchInputChange = (event: any) => {
        setSearchValue(event.target.value);
        if (event.target.value.length >= 3) {
            props.onSearch(event.target.value);
        }
    }

    return (
        <FormControl className={searchContainer}>
            <Input
                color="primary"
                defaultValue=''
                fullWidth
                type="search"
                onChange={handleSearchInputChange}
                value={searchValue}
                id="search-element"
                />
        </FormControl>
    )
}