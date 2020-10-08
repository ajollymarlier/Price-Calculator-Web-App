import React, { Component} from 'react';
import './App.css'
import {Button, Card, TextField} from '@material-ui/core';
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

class DiscountBar extends Component{
    render(){
        return(
            <Card>
                <Autocomplete 
                    id="discountInput" 
                    options={this.props.discounts}
                    getOptionLabel={(option) => option.code}
                    renderInput={(params) => <TextField {...params} label="Enter Discount Code..." variant="outlined" />}
                />

                <Button 
                    disableElevation
                    color="primary"
                    variant="contained"
                    style={{float: "right"}} 
                    onClick={() => 
                                this.props.updateDiscount(document.getElementById("discountInput").value)}>
                Apply</Button>

            </Card>
        );
    }
}    

export default DiscountBar