import Order from "../model/orderdetails.model.js";
import OrderItems from "../model/orderitems.model.js";

export const add = (request, response, next) => {
    let userId = request.body.userId;
    let orderDate = request.body.orderDate;
    let amount = request.body.amount;
    let paymentMode = request.body.paymentMode;
    let deliverAddress = request.body.deliverAddress;
    let contactPersonNumber = request.body.contactPersonNumber;

    let order = new Order(null, userId, orderDate, amount, paymentMode, deliverAddress, contactPersonNumber);

    order.add()
        .then((result) => {
            return response.status(200).json({ message: "successfully add to order" });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "Internal server error", error: err })
        })
}

export const remove = (request, response, next) => {
    let id = request.body.id;

    let order = new Order(id);

    order.remove()
        .then((result) => {
            if (result.affectedRows != 0)
                return response.status(200).json({ message: "successfully remove to order" });
            return response.status(400).json({ message: "unauthorized request.....data not found" });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "Internal server error", error: err })
        })
}

export const list = (request, response, next) => {
    Order.list()
        .then((result) => {
            return response.status(200).json({ Data: result });
        })
        .catch((err) => {
            return response.status(500).json({ Error: "Internal server error", err })
        })
}
