import React, { Component} from 'react';
import './App.css'
import {Typography,Paper, IconButton, Grid} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
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
        }
    },
});

class CartItem extends Component {
    render() { 
        return (
            <div className="cartItem">
                <Grid container direction="row">
                    <Typography variant="h5">{this.props.item.name}</Typography>
                    <Typography className="itemAmount" variant="h6" align="right">
                        (x{this.props.item.amount})</Typography>
                </Grid>
                <Typography variant="body1">${this.props.item.price.toFixed(2)} 
                <IconButton color="secondary" onClick={() => this.props.removeItem(this.props.index)}>
                    <DeleteIcon/>
                </IconButton>                                                                                                                                                                                                                            </Typography>
            </div>
        )
    }
}

//Bay for all cart items to be displayed
class Cart extends Component {
    render() {
        if(this.props.cartItems.length !== 0){
            return (
                <Paper id='cart' elevation={4} style={{ minHeight: '20vh' }}> 
                    <Typography variant="h4" gutterBottom={true} color="primary" align="center">
                        Cart
                    </Typography>

                    {this.props.cartItems.map(
                        (currentItem, i) => 
                            <CartItem key={i} index={i} item={currentItem} removeItem={this.props.removeItem} />
                    )}
                </Paper>
            );
        }

        else{
            return(
                <div>
                    <Paper elevation={4} id='cart' style={{ minHeight: '20vh' }}>
                        <Typography variant="h4" gutterBottom={true} color="primary" align="center">
                            Cart
                        </Typography>

                        <Typography variant="h6">No items in the cart...</Typography>
                    </Paper>
                </div>
            );
        }  
    }
}

export default Cart