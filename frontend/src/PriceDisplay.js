import React, { Component} from 'react';
import './App.css'
import {Card, Typography, CardContent} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import DiscountBar from "./DiscountBar"

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

class PriceDisplay extends Component{
    constructor(props) {
        super(props)

        this.state = {
            cartItems: this.props.cartItems
        }
    }
    
    render(){
        return(
            <Card elevation={4}>
                <CardContent>
                    <Typography variant="h4" gutterBottom={true} color="primary" align="center">
                            Price
                    </Typography>

                    <DiscountBar 
                        id="discountBar" 
                        discounts={this.props.discounts} 
                        updateDiscount={this.props.updateDiscount}
                        />

                    <br/>
                    <Typography variant="h6" align="right">Price (Before Tax): ${this.props.totalPrice.toFixed(2)}</Typography>
                    <Typography variant="h6" align="right">Tax: ${(this.props.totalPrice * 0.13).toFixed(2)}</Typography>
                    <Typography variant="h6" align="right">Discount ({this.props.discountRate * 100}%): -${(this.props.totalPrice * this.props.discountRate).toFixed(2)}</Typography>
                    <Typography variant="h6" align="right" id="discountDisplay">
                        Total Price: ${(((this.props.totalPrice * 1.13) 
                                            - (this.props.totalPrice * this.props.discountRate)).toFixed(2))}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default PriceDisplay