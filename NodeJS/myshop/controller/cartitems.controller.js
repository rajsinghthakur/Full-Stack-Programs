import CartItems from "../model/cartitems.model.js";

export const add = (request, response, next) => {
    let cartId = request.body.cartId;
    let productId = request.body.productId;

    let cartitems = new CartItems(null, cartId, productId);

    cartitems.add()
        .then((result) => {
            return response.status(200).json({ Message: "add successfully" });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "internal server error", err });
        })
}

export const remove = (request, response, next) => {
    let id = request.body.id;

    let cartitems = new CartItems(id);

    cartitems.remove()
        .then((result) => {
            if (result.affectedRows != 0)
                return response.status(200).json({ Message: "remove successfully" });
            return response.status(400).json({ err: "unauthorized request..... data not found" });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "internal server error", err });
        })
}

export const list = (request, response, next) => {
    CartItems.list()
        .then((result) => {
            return response.status(200).json({ Data: result });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "internal server error" })
        })
}