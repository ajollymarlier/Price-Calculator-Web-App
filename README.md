# **Running Instructions:**

To run the web app, just go to the link: *https://csc301-a1-jollymar.herokuapp.com/*

## **Overview**
This is a simple item selection and price calculating web app. The user can search through a list of inventory items and add them to their cart, seeing their price update dynamically.

## **Technology Used**

**Frontend:**
- ReactJS
- Material-UI

**Backend:**
- Flask

**Data Storage:**
- Static JSON files

## **Features**
- **Users can either scroll through the inventory list, or use the search bar to narrow down their options.**
    - *Once an item is selected, the user can add the item to the cart and see the price updated on the side.*

- **Users can apply a discount code from a set list in the search bar above the price display.**
    - *The price will be adjusted to accommodate the new discount.*

- **If users decide to add an item which already exists in their cart, the amount value of the item in the cart, and the price will be updated to reflect these changes, rather than adding a whole new item block to the cart.**

- **Users can click the trash icon by any cart item to remove 1 of the entries from their cart**
    - *The price will be updated to reflect this change.*

- **Whenever a user adds or removes an item in their cart, their cart items will be sent to the backend and saved.**
    - *This can be seen when a user refreshes the page while items are in their cart.*
    - *Since the point of this app is just to be a demo, I did not include specific cart item files for each unique user.*
        -  This would be a future feature.
