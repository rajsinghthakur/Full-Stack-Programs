import Product from "../model/product.model.js"

export const add = (request, response, next) => {
    let title = request.body.title;
    let brand = request.body.brand;
    let price = request.body.price;
    let description = request.body.description;
    let imageUrl = request.body.imageUrl;
    let categoryId = request.body.categoryId;

    let product = new Product(null, title, brand, price, description, imageUrl, categoryId);

    product.add()
        .then(result => {
            return response.status(200).json({ message: "product added" });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server error", Error: err });
        })
}

export const removeById = (request, response, next) => {
    let id = request.body.id;

    Product.removeById(id)
        .then(result => {
            return response.status(200).json({ message: "product deleted" });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server error", Error: err });
        })
}

export const removeByName = (request, response, next) => {
    let title = request.body.title;

    Product.removeByName(title)
        .then(result => {
            return response.status(200).json({ message: "product deleted" });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server error", Error: err });
        })
}

export const list = (request, response, next) => {

    Product.list()
        .then(result => {
            return response.status(200).json({ Data: result });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server error", Error: err });
        })
}

export const listByCId = (request, response, next) => {
    let categoryId = request.body.categoryId;

    Product.listByCId(categoryId)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ Data: result });
            return response.status(401).json({ message: "unauthorized request......  data not found" });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server error", Error: err });
        })
}

export const listById = (request, response, next) => {
    let id = request.body.id;

    Product.listById(id)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ Data: result });
            return response.status(401).json({ message: "unauthorized request......  data not found" });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server error", Error: err });
        })
}

export const update = (request, response, next) => {
    let id = request.body.id;
    let title = request.body.title;
    let brand = request.body.brand;
    let price = request.body.price;
    let description = request.body.description;
    let imageUrl = request.body.imageUrl;
    let categoryId = request.body.categoryId;

    let product = new Product(id, title, brand, price, description, imageUrl, categoryId);

    product.update()
        .then(result => {
            if (result.affectedRows != 0)
                return response.status(200).json({ message: "product updated" });
            return response.status(401).json({ message: "unauthorized request......  data not found" });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server error", Error: err });
        })
}