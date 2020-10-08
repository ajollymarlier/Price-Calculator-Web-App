import React, { Component} from 'react';
import './App.css'
import {Grid, Typography} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import PriceDisplay from "./PriceDisplay"
import SearchBar from "./SearchBar"
import Cart from "./Cart.js"

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

class App extends Component{
    constructor(props) {
        super(props)
        

        this.state = {
            totalPrice: 0.00,
            discountRate: 0.00,
            
            cartItems: [],
            discounts: [],
            inventory: []
        }

        //Fetch calls to retrieve inventory, saved cart items, and available discount codes
        fetch(`${window.location}api/getCartItems`)
            .then(res => res.json()).then(cartData => {
                let resCartItems = JSON.parse(cartData)
                
                let startPrice = 0.00
                for(var i = 0; i < resCartItems.length; i++){
                    startPrice += resCartItems[i].price
                }

                this.setState({
                    cartItems: resCartItems,
                    totalPrice: startPrice
                })
            })

        fetch(`${window.location}api/getDiscountCodes`)
            .then(res => res.json()).then(discountData => {
                this.setState({discounts: JSON.parse(discountData)})
            })

        fetch(`${window.location}api/getInventory`)
            .then(res => res.json()).then(inventoryData => {
                this.setState({inventory: JSON.parse(inventoryData)})
            })

    }

    //Adds selected item to cartItems list
    addItem = (itemName) => {
        let updatedItems = this.state.cartItems
        let currPrice = this.state.totalPrice
        let inventory = this.state.inventory

        for(var i = 0; i < inventory.length; i++){
            if(inventory[i].name === itemName){
                updatedItems.push(inventory[i])

                currPrice += inventory[i].price
            }
        }

        this.setState({
            cartItems: updatedItems
        })

        this.setState({
            totalPrice: currPrice 
        })
    }

    //Removes selected item from cartItems
    removeItem = (index) => {
        let updatedItems = this.state.cartItems
        let currPrice = this.state.totalPrice

        currPrice -= this.state.cartItems[index].price
        updatedItems.splice(index, 1)
        

        this.setState({
            cartItems: updatedItems,
            totalPrice: currPrice 
        })
    }

    //Sets current active discount
    updateDiscount = (newRateCode) => {
        let discounts = this.state.discounts

        for(var i = 0; i < discounts.length; i++){
            if(discounts[i].code === newRateCode){
                this.setState({
                    discountRate: discounts[i].discountRate
                })
            }
        }
    }

    render(){
        return(
            <Grid container
                direction="column"
                justify="center"
                alignItems="center">

                <Typography variant="h3" gutterBottom>Price Checkout Calculator</Typography>

                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={10} md={5}>
                        <SearchBar 
                            id="searchBar"
                            inventory={this.state.inventory}
                            addItem={this.addItem}
                            cartItems={this.state.cartItems}/>
                    </Grid> 
                </Grid>   
                
                <Grid id="cartBay" container direction="row" justify="center" alignItems="center">
                    <Grid item xs={10} md={3}>
                        <Cart 
                            removeItem={this.removeItem}
                            cartItems={this.state.cartItems}/>
                    </Grid>

                    <Grid item xs={10} md={3}>
                        <PriceDisplay
                            discounts={this.state.discounts}
                            updateDiscount={this.updateDiscount} 
                            totalPrice={this.state.totalPrice}
                            discountRate={this.state.discountRate}
                            cartItems={this.state.cartItems}/> 
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App