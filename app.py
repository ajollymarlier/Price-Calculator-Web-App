import json
import os
from flask import Flask, jsonify

app = Flask(__name__, static_folder="/", static_url_path="/")

@app.route("/")
def index():
	#return "YOU WEREN'T SUPPOSED TO SEE THIS"
    return app.send_static_file('index.html')

#Returns discountCode data from local json file
@app.route('/api/getDiscountCodes', methods=['GET'])
def get_discount_codes():
    with open('./data/discountCodes.json') as f:
        data = json.load(f)

    data.headers.add('Access-Control-Allow-Origin', '*')       
    return json.dumps(data)


#Returns inventory data from local json file
@app.route('/api/getInventory', methods=['GET'])
def get_inventory():
    with open('./data/inventory.json') as f:
        data = json.load(f)

    response = jsonify(json.dumps(data))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


#Returns saved Cart Items
@app.route('/api/getCartItems', methods=['GET'])
def get_cart_items():
    with open('./data/cartItems.json') as f:
        data = json.load(f)
    
    data.headers.add('Access-Control-Allow-Origin', '*')
    return json.dumps(data)


if __name__ == "__main__":
    app.run()
