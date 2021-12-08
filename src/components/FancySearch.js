import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import React from 'react';
import { useNavigate } from "react-router-dom";



const FancySearch = (props) => {
    const navigate = useNavigate();

    const onChanged = (event) => {
        const id = event.target.getAttribute('data-countryid')
        if (id !== null) {
            navigate(`/countries/${id}`);
        }
    }

    return (
        <Autocomplete
            id="country-search"
            sx={{ width: 300 }}
            options={props.countries}
            getOptionLabel={(country) => country.name}
            renderInput={(params) => (
                <TextField {...params}
                    label="Countries" margin="normal" />
            )}
            onChange={onChanged}
            renderOption={(props, country, { inputValue }) => {
                const matches = match(country.name, inputValue);
                const parts = parse(country.name, matches);

                return (
                    <li
                        data-countryid={country.id}
                        {...props}>
                        <div>
                            {parts.map((part) => (
                                <span
                                    key={`${country.id}`}
                                    style={{
                                        fontWeight: part.highlight ? 700 : 400,
                                    }}>
                                    {part.text}
                                </span>
                            ))}
                        </div>
                    </li>
                );
            }}
        />
    );
}


export default FancySearch;