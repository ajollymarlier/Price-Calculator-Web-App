import json
from flask import Flask, jsonify

app = Flask(__name__)

#Returns discountCode data from local json file
@app.route('/api/getDiscountCodes', methods=['GET'])
def get_discount_codes():
    with open('./data/discountCodes.json') as f:
        data = json.load(f)

    response = jsonify(json.dumps(data))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


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
    
    response = jsonify(json.dumps(data))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run()   
