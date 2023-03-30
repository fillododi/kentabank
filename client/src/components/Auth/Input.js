import React from "react";
import {TextField, Grid, InputAdornment, IconButton} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const Input = ({halfWidth, name, handleChange, label, autoFocus, type, handleShowPassword}) => {
    return <Grid item xs={12} sm={halfWidth? 6: 12}>
        <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            inputProps={name==='password' &&
                {
                    endAdornment: <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password'? <Visibility/>: <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }
            }
        />
    </Grid>
}

export default Input