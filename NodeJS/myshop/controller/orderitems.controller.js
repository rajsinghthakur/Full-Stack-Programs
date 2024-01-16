import OrderItems from "../model/orderitems.model.js";

export const add = (request, response, next) => {
    let orderId = request.body.orderId;
    let productId = request.body.productId;
    let qty = request.body.qty;
    let price = request.body.price;

    let orderitems = new OrderItems(null, orderId, productId, qty, price);

    orderitems.add()
        .then((result) => {
            return response.status(200).json({ message: "successfully add to orderitems" });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "Internal server error", error: err })
        })
}

export const remove = (request, response, next) => {
    let id = request.body.id;

    let orderitems = new OrderItems(id);

    orderi.remove()
        .then((result) => {
            if (result.affectedRows != 0)
                return response.status(200).json({ message: "successfully remove to orderitem" });
            return response.status(400).json({ message: "unauthorized request.....data not found" });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "Internal server error", error: err })
        })
}
