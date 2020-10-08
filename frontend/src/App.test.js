import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PriceDisplay from './PriceDisplay';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("getInventory connection successful", () => {
  let testCartItems = [
    {"name": "Roasted Peanuts", "price": 5.99, "amount": 2}, 
    { "name": "Sliced Pineapple", "price": 4.99, "amount": 1}
  ]

  let testDiscounts = [
    {"code": "TENOFF", "discountRate": 0.10},
    {"code": "SWEET15", "discountRate": 0.15},
    {"code": "TWENTYTWENTY", "discountRate": 0.20},
    {"code": "HEYTHIRTY", "discountRate": 0.30},
    {"code": "HALFSIES", "discountRate": 0.50},
    {"code": "ALMOSTFREE", "discountRate": 0.75}
]

  let testDiscountRate = 0.2
  let testTotalPrice = 16.97

  testUpdateDiscounts = () => {
    console.log("Discount Updated")
  }

  const div = document.createElement('div');
  ReactDOM.render(<PriceDisplay
                    id="testPriceDisplay"
                    discounts={testDiscounts}
                    updateDiscount={testUpdateDiscount} 
                    totalPrice={testTotalPrice}
                    discountRate={testDiscountRate}
                    cartItems={testCartItems}/>
    , div);

   

  expect(testTotalPrice)

})
