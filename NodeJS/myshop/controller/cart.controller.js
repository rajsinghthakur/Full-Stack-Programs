import Cart from "../model/cart.model.js";
import CartItems from '../model/cartitems.model.js';

export const addToCart = async (request, response, next) => {
    try {
        let userId = request.body.userId;
        let productId = request.body.productId;

        let result = await Cart.isCartExist(userId);
        if (result.length) {
            // cart exist and then we have save product in cartItems
            let cartId = result[0].id;
            await CartItems.saveCartItem(cartId, productId);
            return response.status(200).json({ message: 'Item saved in cart' });
        }
        else {
            // cart not exits then first create cart then save product in cartItems
            let result = await Cart.createCart(userId);
            let cartId = result[0].id;
            await CartItems.saveCartItem(cartId, productId);
            return response.status(200).json({ message: 'Item saved in cart' });
        }
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}

export const add = (request, response, next) => {
    let userId = request.body.userId;

    let cart = new Cart(null, userId);

    cart.add()
        .then((result) => {
            return response.status(200).json({ message: "successfully add to cart" });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "Internal server error", error: err })
        })
}

export const remove = (request, response, next) => {
    let id = request.body.id;

    let cart = new Cart(id);

    cart.remove()
        .then((result) => {
            if (result.affectedRows != 0)
                return response.status(200).json({ message: "successfully remove to cart" });
            return response.status(400).json({ message: "unauthorized request.....data not found" });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "Internal server error", error: err })
        })
}

export const list = (request, response, next) => {
    Cart.list()
        .then((result) => {
            return response.status(200).json({ List: result });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "Internal server error", error: err })
        })
}
