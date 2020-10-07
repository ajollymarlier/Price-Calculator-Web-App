import json
import os
from flask import Flask

app = Flask(__name__, static_folder="/", static_url_path="/")

@app.route("/")
def index():
	return "YOU WEREN'T SUPPOSED TO SEE THIS"

#Returns discountCode data from local json file
@app.route('/api/getDiscountCodes')
def get_discount_codes():
    with open('./data/discountCodes.json') as f:
        data = json.load(f)
        
    return json.dumps(data)


#Returns inventory data from local json file
@app.route('/api/getInventory')
def get_inventory():
    with open('./data/inventory.json') as f:
        data = json.load(f)
        
    return json.dumps(data)


#Returns saved Cart Items
@app.route('/api/getCartItems')
def get_cart_items():
    with open('./data/cartItems.json') as f:
        data = json.load(f)
    
    return json.dumps(data)


if __name__ == "__main__":
    app.run()
