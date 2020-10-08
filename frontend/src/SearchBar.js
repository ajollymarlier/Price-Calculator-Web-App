import React, { Component} from 'react';
import './App.css'
import {Button, TextField, Paper} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme } from '@material-ui/core/styles';

createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

class SearchBar extends Component{
    render(){
        return (
            <Paper elevation={4}>
                <Autocomplete 
                    className="searchComponent" 
                    id="searchInput" 
                    options={this.props.inventory}
                    getOptionLabel={(option) => (option.name + ": $" + option.price)}
                    renderInput={(params) => <TextField {...params} label="Search Items..." variant="outlined" />}
                />

                <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    style={{float: "right"}} 
                    onClick={() => {
                            let val = document.getElementById("searchInput").value
                            this.props.addItem(val.split(":")[0])
                        }
                    } >+ Add</Button>
         
            </Paper>
        );
    }
}

export default SearchBar