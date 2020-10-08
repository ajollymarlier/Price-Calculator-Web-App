import json
import os
from flask import Flask, jsonify, request
from flask.helpers import make_response
import sys

app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')

#Default route
@app.route('/')
def index():
    return app.send_static_file('index.html')

#Returns discountCode data from local json file
@app.route('/api/getDiscountCodes', methods=['GET'])
def get_discount_codes():
    with open('./data/discountCodes.json') as f:
        data = json.load(f)

    response = jsonify(json.dumps(data))
    return response


#Returns inventory data from local json file
@app.route('/api/getInventory', methods=['GET'])
def get_inventory():
    with open('./data/inventory.json') as f:
        data = json.load(f)

    response = jsonify(json.dumps(data))
    return response


#Returns saved Cart Items
@app.route('/api/getCartItems', methods=['GET'])
def get_cart_items():
    with open('./data/cartItems.json') as f:
        data = json.load(f)
    
    response = jsonify(json.dumps(data))
    return response

#Saves cart items
@app.route('/api/saveCartItems', methods=['POST', "GET"])
def save_cart_items():
    req = request.get_json()

    f = open("./data/cartItems.json", "w")
    f.write(json.dumps(req))
    f.close()

    res = make_response(jsonify({"message": "CartItems Saved"}), 200)

    return res

if __name__ == "__main__":
    #For testing localy
    #app.run()

    #For production
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))   
