function getProducts() {
    var productList = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"] }, { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 899, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"] }, { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/3/1.jpg"] }, { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/4/1.jpg", "https://i.dummyjson.com/data/products/4/2.jpg", "https://i.dummyjson.com/data/products/4/3.jpg", "https://i.dummyjson.com/data/products/4/4.jpg", "https://i.dummyjson.com/data/products/4/thumbnail.jpg"] }, { "id": 5, "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 499, "discountPercentage": 10.58, "rating": 4.09, "stock": 32, "brand": "Huawei", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/5/1.jpg", "https://i.dummyjson.com/data/products/5/2.jpg", "https://i.dummyjson.com/data/products/5/3.jpg"] }, { "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "Apple", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/6/1.png", "https://i.dummyjson.com/data/products/6/2.jpg", "https://i.dummyjson.com/data/products/6/3.png", "https://i.dummyjson.com/data/products/6/4.jpg"] }, { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/7/1.jpg", "https://i.dummyjson.com/data/products/7/2.jpg", "https://i.dummyjson.com/data/products/7/3.jpg", "https://i.dummyjson.com/data/products/7/thumbnail.jpg"] }, { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"] }, { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/9/1.jpg", "https://i.dummyjson.com/data/products/9/2.png", "https://i.dummyjson.com/data/products/9/3.png", "https://i.dummyjson.com/data/products/9/4.jpg", "https://i.dummyjson.com/data/products/9/thumbnail.jpg"] }, { "id": 10, "title": "HP Pavilion 15-DK1056WM", "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", "price": 1099, "discountPercentage": 6.18, "rating": 4.43, "stock": 89, "brand": "HP Pavilion", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg", "images": ["https://i.dummyjson.com/data/products/10/1.jpg", "https://i.dummyjson.com/data/products/10/2.jpg", "https://i.dummyjson.com/data/products/10/3.jpg", "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"] }, { "id": 11, "title": "perfume Oil", "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil", "price": 13, "discountPercentage": 8.4, "rating": 4.26, "stock": 65, "brand": "Impression of Acqua Di Gio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/11/1.jpg", "https://i.dummyjson.com/data/products/11/2.jpg", "https://i.dummyjson.com/data/products/11/3.jpg", "https://i.dummyjson.com/data/products/11/thumbnail.jpg"] }, { "id": 12, "title": "Brown Perfume", "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml", "price": 40, "discountPercentage": 15.66, "rating": 4, "stock": 52, "brand": "Royal_Mirage", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/12/1.jpg", "https://i.dummyjson.com/data/products/12/2.jpg", "https://i.dummyjson.com/data/products/12/3.png", "https://i.dummyjson.com/data/products/12/4.jpg", "https://i.dummyjson.com/data/products/12/thumbnail.jpg"] }, { "id": 13, "title": "Fog Scent Xpressio Perfume", "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men", "price": 13, "discountPercentage": 8.14, "rating": 4.59, "stock": 61, "brand": "Fog Scent Xpressio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/13/1.jpg", "https://i.dummyjson.com/data/products/13/2.png", "https://i.dummyjson.com/data/products/13/3.jpg", "https://i.dummyjson.com/data/products/13/4.jpg", "https://i.dummyjson.com/data/products/13/thumbnail.webp"] }, { "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil", "price": 120, "discountPercentage": 15.6, "rating": 4.21, "stock": 114, "brand": "Al Munakh", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/14/1.jpg", "https://i.dummyjson.com/data/products/14/2.jpg", "https://i.dummyjson.com/data/products/14/3.jpg", "https://i.dummyjson.com/data/products/14/thumbnail.jpg"] }, { "id": 15, "title": "Eau De Perfume Spray", "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality", "price": 30, "discountPercentage": 10.99, "rating": 4.7, "stock": 105, "brand": "Lord - Al-Rehab", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/15/1.jpg", "https://i.dummyjson.com/data/products/15/2.jpg", "https://i.dummyjson.com/data/products/15/3.jpg", "https://i.dummyjson.com/data/products/15/4.jpg", "https://i.dummyjson.com/data/products/15/thumbnail.jpg"] }, { "id": 16, "title": "Hyaluronic Acid Serum", "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid", "price": 19, "discountPercentage": 13.31, "rating": 4.83, "stock": 110, "brand": "L'Oreal Paris", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/16/1.png", "https://i.dummyjson.com/data/products/16/2.webp", "https://i.dummyjson.com/data/products/16/3.jpg", "https://i.dummyjson.com/data/products/16/4.jpg", "https://i.dummyjson.com/data/products/16/thumbnail.jpg"] }, { "id": 17, "title": "Tree Oil 30ml", "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,", "price": 12, "discountPercentage": 4.09, "rating": 4.52, "stock": 78, "brand": "Hemani Tea", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/17/1.jpg", "https://i.dummyjson.com/data/products/17/2.jpg", "https://i.dummyjson.com/data/products/17/3.jpg", "https://i.dummyjson.com/data/products/17/thumbnail.jpg"] }, { "id": 18, "title": "Oil Free Moisturizer 100ml", "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.", "price": 40, "discountPercentage": 13.1, "rating": 4.56, "stock": 88, "brand": "Dermive", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/18/1.jpg", "https://i.dummyjson.com/data/products/18/2.jpg", "https://i.dummyjson.com/data/products/18/3.jpg", "https://i.dummyjson.com/data/products/18/4.jpg", "https://i.dummyjson.com/data/products/18/thumbnail.jpg"] }, { "id": 19, "title": "Skin Beauty Serum.", "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m", "price": 46, "discountPercentage": 10.68, "rating": 4.42, "stock": 54, "brand": "ROREC White Rice", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/19/1.jpg", "https://i.dummyjson.com/data/products/19/2.jpg", "https://i.dummyjson.com/data/products/19/3.png", "https://i.dummyjson.com/data/products/19/thumbnail.jpg"] }, { "id": 20, "title": "Freckle Treatment Cream- 15gm", "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.", "price": 70, "discountPercentage": 16.99, "rating": 4.06, "stock": 140, "brand": "Fair & Clear", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/20/1.jpg", "https://i.dummyjson.com/data/products/20/2.jpg", "https://i.dummyjson.com/data/products/20/3.jpg", "https://i.dummyjson.com/data/products/20/4.jpg", "https://i.dummyjson.com/data/products/20/thumbnail.jpg"] }, { "id": 21, "title": "- Daal Masoor 500 grams", "description": "Fine quality Branded Product Keep in a cool and dry place", "price": 20, "discountPercentage": 4.81, "rating": 4.44, "stock": 133, "brand": "Saaf & Khaas", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/21/1.png", "https://i.dummyjson.com/data/products/21/2.jpg", "https://i.dummyjson.com/data/products/21/3.jpg"] }, { "id": 22, "title": "Elbow Macaroni - 400 gm", "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm", "price": 14, "discountPercentage": 15.58, "rating": 4.57, "stock": 146, "brand": "Bake Parlor Big", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/22/1.jpg", "https://i.dummyjson.com/data/products/22/2.jpg", "https://i.dummyjson.com/data/products/22/3.jpg"] }, { "id": 23, "title": "Orange Essence Food Flavou", "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item", "price": 14, "discountPercentage": 8.04, "rating": 4.85, "stock": 26, "brand": "Baking Food Items", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/23/1.jpg", "https://i.dummyjson.com/data/products/23/2.jpg", "https://i.dummyjson.com/data/products/23/3.jpg", "https://i.dummyjson.com/data/products/23/4.jpg", "https://i.dummyjson.com/data/products/23/thumbnail.jpg"] }, { "id": 24, "title": "cereals muesli fruit nuts", "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji", "price": 46, "discountPercentage": 16.8, "rating": 4.94, "stock": 113, "brand": "fauji", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/24/1.jpg", "https://i.dummyjson.com/data/products/24/2.jpg", "https://i.dummyjson.com/data/products/24/3.jpg", "https://i.dummyjson.com/data/products/24/4.jpg", "https://i.dummyjson.com/data/products/24/thumbnail.jpg"] }, { "id": 25, "title": "Gulab Powder 50 Gram", "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds", "price": 70, "discountPercentage": 13.58, "rating": 4.87, "stock": 47, "brand": "Dry Rose", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/25/1.png", "https://i.dummyjson.com/data/products/25/2.jpg", "https://i.dummyjson.com/data/products/25/3.png", "https://i.dummyjson.com/data/products/25/4.jpg", "https://i.dummyjson.com/data/products/25/thumbnail.jpg"] }, { "id": 26, "title": "Plant Hanger For Home", "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf", "price": 41, "discountPercentage": 17.86, "rating": 4.08, "stock": 131, "brand": "Boho Decor", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/26/1.jpg", "https://i.dummyjson.com/data/products/26/2.jpg", "https://i.dummyjson.com/data/products/26/3.jpg", "https://i.dummyjson.com/data/products/26/4.jpg", "https://i.dummyjson.com/data/products/26/5.jpg", "https://i.dummyjson.com/data/products/26/thumbnail.jpg"] }, { "id": 27, "title": "Flying Wooden Bird", "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm", "price": 51, "discountPercentage": 15.58, "rating": 4.41, "stock": 17, "brand": "Flying Wooden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/27/1.jpg", "https://i.dummyjson.com/data/products/27/2.jpg", "https://i.dummyjson.com/data/products/27/3.jpg", "https://i.dummyjson.com/data/products/27/4.jpg", "https://i.dummyjson.com/data/products/27/thumbnail.webp"] }, { "id": 28, "title": "3D Embellishment Art Lamp", "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)", "price": 20, "discountPercentage": 16.49, "rating": 4.82, "stock": 54, "brand": "LED Lights", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/28/1.jpg", "https://i.dummyjson.com/data/products/28/2.jpg", "https://i.dummyjson.com/data/products/28/3.png", "https://i.dummyjson.com/data/products/28/4.jpg", "https://i.dummyjson.com/data/products/28/thumbnail.jpg"] }, { "id": 29, "title": "Handcraft Chinese style", "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate", "price": 60, "discountPercentage": 15.34, "rating": 4.44, "stock": 7, "brand": "luxury palace", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/29/1.jpg", "https://i.dummyjson.com/data/products/29/2.jpg", "https://i.dummyjson.com/data/products/29/3.webp", "https://i.dummyjson.com/data/products/29/4.webp", "https://i.dummyjson.com/data/products/29/thumbnail.webp"] }, { "id": 30, "title": "Key Holder", "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality", "price": 30, "discountPercentage": 2.92, "rating": 4.92, "stock": 54, "brand": "Golden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/30/1.jpg", "https://i.dummyjson.com/data/products/30/2.jpg", "https://i.dummyjson.com/data/products/30/3.jpg", "https://i.dummyjson.com/data/products/30/thumbnail.jpg"] }];
    var productList = [{ "id": 1, "title": "Hero Electric Flash", "price": 64248, "thumbnail": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hero-Electric-Flash-130120211529.jpg&w=350&h=251&q=92&c=1" }, { "id": 2, "title": "Okinawa Ridge", "price": 55463, "thumbnail": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Okinawa-Ridge-130120211554.jpg&w=350&h=251&q=92&c=1" }, { "id": 3, "title": "Bounce Infinity E1", "price": 83192, "thumbnail": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Bounce-Infinity-E1-070120221436.png&w=350&h=251&q=92&c=1" }, { "id": 4, "title": "Okinawa Lite", "price": 67291, "thumbnail": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Okinawa-Lite-130120211552.jpg&w=350&h=251&q=92&c=1" }, { "id": 5, "title": "Okinawa Ridge Plus", "price": 70724, "thumbnail": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Okinawa-Ridge-Plus-130120211552.jpg&w=350&h=251&q=92&c=1" }, { "id": 6, "title": "yugbike", "price": 70000, "thumbnail": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/516TInPjvBL._AC_UL480_FMwebp_QL65_.jpg" }, { "id": 7, "title": "AMPERE", "price": 104900, "thumbnail": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Ba3g7aelL._AC_UL480_FMwebp_QL65_.jpg" }, { "id": 8, "title": "Kinetic Green Electric Scooter", "price": 99990, "thumbnail": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ohBRHUe8L._AC_UL480_FMwebp_QL65_.jpg" }, { "id": 9, "title": "AMPERE", "price": 146355, "thumbnail": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71wF3dbId5L._AC_UL480_FMwebp_QL65_.jpg" }, { "id": 10, "title": "OKAYA", "price": 137990, "thumbnail": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51xU2ZP9UvL._AC_UL480_FMwebp_QL65_.jpg" }, { "id": 11, "title": "Okinawa Ridge", "price": 55463, "thumbnail": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Okinawa-Ridge-130120211554.jpg&w=350&h=251&q=92&c=1" }, { "id": 12, "title": "Bounce Infinity E1", "price": 83192, "thumbnail": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Bounce-Infinity-E1-070120221436.png&w=350&h=251&q=92&c=1" }]
    return productList;
}
function getDataFromStorage() {
    var data = localStorage.getItem("productList");
    data = JSON.parse(data);
    return data;
}
function CreateHeader() {
    var mainDiv = document.querySelector("#mainDiv");

    var header = document.createElement("header");
    header.setAttribute("style", "width:100%; height:70px; background-color:green;");
    header.setAttribute("class", "d-flex justify-content-between");

    var logoDiv = document.createElement("div");
    logoDiv.setAttribute("class", "d-flex justify-content-center align-items-center");
    logoDiv.setAttribute("style", "width:20%;height:70px;");

    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", "./images/logo.jpeg");
    imgElement.setAttribute("src", "data:image/png;base64,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");
    imgElement.setAttribute("style", "width:80%; height:60px; border-radius:30%;");
    logoDiv.appendChild(imgElement);

    var searchDiv = document.createElement("div");
    searchDiv.setAttribute("style", "width:50%; height:70px;");
    searchDiv.setAttribute("class", "d-flex justify-content-center align-items-center");

    var searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search product");
    searchInput.setAttribute("style", "width:70%;height:40px; border-radius:10px;");
    searchInput.setAttribute("id", "searchKeyword");
    searchInput.addEventListener("keyup", () => {
        SearchProduct();
    });
    searchDiv.appendChild(searchInput);

    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("style", "width:20%; height:70px;");
    menuDiv.setAttribute("class", "d-flex justify-content-around align-items-center");
    if (isLoggedIn()) {
        var viewCart = document.createElement("span");
        // viewCart.innerText = "";
        viewCart.setAttribute("style", "color:white; cursor:pointer; background:url('https://t3.ftcdn.net/jpg/00/30/21/50/360_F_30215082_UkRQTbOQsiTtcjkTunYNjFoaaccgkRW5.jpg') 50% no-repeat;background-size:200px; height:35px; width:150px; border-radius:10px;");

        viewCart.addEventListener("click", () => {
            var cartDiv = document.querySelector("#cart-container");
            cartDiv.innerHTML = "";
            var currentUser = sessionStorage.getItem("currentUser");
            var cartList = JSON.parse(localStorage.getItem("cartList"));
            var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
            var cartItems = currentUserCartList.cartItems;
            var container = document.createElement("div");
            container.setAttribute("class", "container mt-5");

            var rowDiv = document.createElement("div");
            rowDiv.setAttribute("class", "row");

            var leftContainer = document.createElement("div");
            leftContainer.setAttribute("class", "col-md-8");

            // creating table in left container
            var table = document.createElement("table");
            table.setAttribute("class", "table");

            var thead = document.createElement("thead");

            var tr = document.createElement("tr");
            var sNo = document.createElement("td");
            sNo.innerText = "S.no";
            tr.appendChild(sNo);
            var name = document.createElement("td");
            name.innerText = "Name";
            tr.appendChild(name);
            var price = document.createElement("td");
            price.innerText = "Price";
            tr.appendChild(price);
            var qty = document.createElement("td");
            qty.innerText = "Qty";
            tr.appendChild(qty);
            var total = document.createElement("td");
            total.innerText = "Total";
            tr.appendChild(total);

            thead.appendChild(tr);

            var tbody = document.createElement("tbody");
            for (var index in cartItems) {
                let tr = document.createElement("tr");
                let sNo = document.createElement("td");
                sNo.innerText = "" + (index * 1 + 1);
                tr.appendChild(sNo);

                let name = document.createElement("td");
                name.innerText = cartItems[index].title;
                tr.appendChild(name);

                let price = document.createElement("td");
                price.innerText = cartItems[index].price;
                tr.appendChild(price);

                let qty = document.createElement("td");
                qty.innerHTML = "<input onchange='updateQty(" + cartItems[index].id + "," + index + ")' style='width:50px' id='qtyChange" + index + "' type='number' min='1' value='1'/>";
                tr.appendChild(qty);

                let total = document.createElement("td");
                total.setAttribute("id", "total" + index);
                total.innerText = cartItems[index].price;
                tr.appendChild(total);
                tbody.appendChild(tr);
            }

            table.appendChild(thead);
            table.appendChild(tbody);
            leftContainer.appendChild(table);

            var rightContainer = document.createElement("div");
            rightContainer.setAttribute("class", "col-md-3 offset-1");

            var h1 = document.createElement("h1");
            h1.innerText = "Order Details";
            h1.setAttribute("class", "text-center");
            var hr = document.createElement("hr");

            var totalItems = document.createElement("p");
            totalItems.innerHTML = "Total Items : " + cartItems.length;

            var totalBillAmount = document.createElement("p");
            totalBillAmount.setAttribute("id", "totalBillLabel");
            totalBillAmount.innerHTML = "Total Bill : " + getBillAmount();

            var checkoutButton = document.createElement("button");
            checkoutButton.innerText = "Checkout";
            checkoutButton.setAttribute("class", "btn btn-warning");
            checkoutButton.setAttribute("style", "width:90%; margin:auto;");

            rightContainer.appendChild(h1);
            rightContainer.appendChild(hr);
            rightContainer.appendChild(totalItems);
            rightContainer.appendChild(totalBillAmount);
            rightContainer.appendChild(checkoutButton);

            rowDiv.appendChild(leftContainer);
            rowDiv.appendChild(rightContainer);


            container.appendChild(rowDiv);
            cartDiv.appendChild(container);
        });
        var signOut = document.createElement("span");
        signOut.innerText = "Sign out";
        signOut.setAttribute("style", "color:white;cursor:pointer");

        signOut.addEventListener("click", () => {
            SignOut(menuDiv);
        });

        menuDiv.appendChild(viewCart);
        menuDiv.appendChild(signOut);
    }
    else {
        var signInOptions = document.createElement("span");
        signInOptions.innerText = "Sign in";
        signInOptions.setAttribute("style", "color:white; cursor:pointer;");

        signInOptions.addEventListener("click", () => {
            SignInComponent();
        })
        var signUpOptions = document.createElement("span");
        signUpOptions.innerText = "Sign up";
        signUpOptions.setAttribute("style", "color:white;cursor:pointer");

        signUpOptions.addEventListener("click", () => {
            SignUpComponent();
        });

        menuDiv.appendChild(signInOptions);
        menuDiv.appendChild(signUpOptions);
    }
    header.appendChild(logoDiv);
    header.appendChild(searchDiv);
    header.appendChild(menuDiv);
    mainDiv.appendChild(header);
}

function createCart(data) {
    var mainDiv = document.querySelector("#mainDiv");

    var cartContainer = document.createElement("div");
    cartContainer.setAttribute("class", "container-fluid mt-5 p-2 d-flex flex-wrap justify-content-around");
    cartContainer.setAttribute("style", "row-gap:10px;");
    cartContainer.setAttribute("id", "cart-container");

    for (let product of data) {
        var cartDiv = document.createElement("div");
        cartDiv.setAttribute("style", "width:30%; height:430px; box-shadow: 10px 10px 10px grey;");
        cartDiv.setAttribute("class", "d-flex flex-column align-items-center")
        var productImg = document.createElement("img");
        productImg.setAttribute("src", product.thumbnail);
        productImg.setAttribute("style", "width:100%; height:300px; ");

        var h3 = document.createElement("h3");
        h3.innerText = product.title;
        h3.setAttribute("class", "text-center");

        var p = document.createElement("p");
        p.innerHTML = "Price : <span class='text-success'>" + product.price + " Rs.</span>";
        p.setAttribute("class", "text-center");

        var addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart";
        addToCart.setAttribute("style", "width:90%; height:40px; border-radius:10px; background-color:green;")
        addToCart.setAttribute("class", "text-white");
        addToCart.addEventListener("click", () => {
            if (isLoggedIn())
                saveProductInToCart(product);
            else
                window.alert("Sign in first");
        });
        cartDiv.appendChild(productImg);
        cartDiv.appendChild(h3);
        cartDiv.appendChild(p);
        cartDiv.appendChild(addToCart);
        cartContainer.appendChild(cartDiv);
    }

    mainDiv.appendChild(cartContainer);
}
function saveProductInToCart(product) {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    let currentUserCartItems = cartList.find((obj) => { return obj.email == currentUser });
    if (currentUserCartItems) {
        var currentUserItemList = currentUserCartItems.cartItems;
        var productObj = currentUserItemList.find((obj) => { return obj.id == product.id });
        console.log(productObj);
        if (productObj)
            window.alert("Product is already added into cart");
        else {
            var index = cartList.findIndex((obj) => { return obj.email == currentUser });
            product.qty = 1;
            currentUserCartItems.cartItems.push(product);
            cartList.splice(index, 1);
            cartList.push(currentUserCartItems);
            localStorage.setItem("cartList", JSON.stringify(cartList));
            window.alert("Product added successfully...");
        }
    }
    else {
        var obj = { email: currentUser, cartItems: [] };
        product.qty = 1;
        obj.cartItems.push(product);
        cartList.push(obj);
        localStorage.setItem("cartList", JSON.stringify(cartList));
        window.alert("Prduct successfully added");
    }
}
function SignInComponent() {
    var mainDiv = document.querySelector("#mainDiv");

    mainDiv.innerHTML = "";

    var container = document.createElement("div");
    container.setAttribute("style", "box-shadow:0px 0px 20px grey; padding:20px; width:30%; height: auto;  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%)");

    var divFormGroupFirst = document.createElement("div");
    divFormGroupFirst.setAttribute("class", "form-group");
    var emailInput = document.createElement("input");
    emailInput.setAttribute("class", "form-control");
    emailInput.setAttribute("placeholder", "Enter email id");
    emailInput.setAttribute("id", "email");
    divFormGroupFirst.appendChild(emailInput);
    container.appendChild(divFormGroupFirst);

    var divFormGroupSecond = document.createElement("div");
    divFormGroupSecond.setAttribute("class", "form-group");
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("class", "form-control");
    passwordInput.setAttribute("placeholder", "Enter password");
    passwordInput.setAttribute("id", "password");

    divFormGroupSecond.appendChild(passwordInput);
    container.appendChild(divFormGroupSecond);

    var signInSubmitButton = document.createElement("button");
    signInSubmitButton.setAttribute("class", "btn btn-secondary mt-2");
    signInSubmitButton.innerText = "Sign in";

    signInSubmitButton.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        signIn(email, password);
    })
    var signUpLabel = document.createElement("span");
    signUpLabel.innerText = "Create New Account";
    signUpLabel.setAttribute("class", "text-danger ml-5");
    signUpLabel.setAttribute("role", "button");
    signUpLabel.addEventListener("click", () => {
        SignUpComponent();
    });
    container.appendChild(signInSubmitButton);
    container.appendChild(signUpLabel);
    mainDiv.appendChild(container);
}
function SignUpComponent() {
    var mainDiv = document.querySelector("#mainDiv");

    mainDiv.innerHTML = "";

    var container = document.createElement("div");
    container.setAttribute("style", "box-shadow:10px 10px 10px grey; padding:20px; width:30%; height: auto;  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%)");

    var divFormGroupFirst = document.createElement("div");
    divFormGroupFirst.setAttribute("class", "form-group");
    var emailInput = document.createElement("input");
    emailInput.setAttribute("class", "form-control");
    emailInput.setAttribute("placeholder", "Enter email id");
    emailInput.setAttribute("id", "email");
    divFormGroupFirst.appendChild(emailInput);
    container.appendChild(divFormGroupFirst);

    var divFormGroupSecond = document.createElement("div");
    divFormGroupSecond.setAttribute("class", "form-group");
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("class", "form-control");
    passwordInput.setAttribute("placeholder", "Enter password");
    passwordInput.setAttribute("id", "password");
    divFormGroupSecond.appendChild(passwordInput);
    container.appendChild(divFormGroupSecond);

    var signUpSubmitButton = document.createElement("button");
    signUpSubmitButton.setAttribute("class", "btn btn-secondary mt-2");
    signUpSubmitButton.innerText = "Sign up";
    signUpSubmitButton.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        if (isUserExist(email, password))
            window.alert("User Already Exist..");
        else {
            var user = { email: email, password: password };
            var userList = JSON.parse(localStorage.getItem("userList"));
            userList.push(user);
            localStorage.setItem("userList", JSON.stringify(userList));
            window.alert("User Registered Successfully");
            SignInComponent();
        }
    });

    var signInLabel = document.createElement("span");
    signInLabel.innerText = "Already have account";
    signInLabel.setAttribute("class", "text-danger ml-5");
    signInLabel.setAttribute("role", "button");
    signInLabel.addEventListener("click", () => {
        SignInComponent();
    });

    container.appendChild(signUpSubmitButton);
    container.appendChild(signInLabel);

    mainDiv.appendChild(container);
}

function isUserExist(email, password) {
    console.log(email + "  " + password);
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);

    var user = userList.find((user) => { return user.email == email });

    console.log(user);
    return !!user; // user : null | {}
}

function signIn(email, password) {

    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);

    var user = userList.find((user) => { return user.email == email && user.password == password });

    if (user) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("currentUser", user.email);
        document.querySelector("#mainDiv").innerHTML = "";
        CreateHeader();
        createCart(JSON.parse(localStorage.getItem("productList")));
    }
    else
        window.alert("Sign in Failed...");
}
function isLoggedIn() {
    return !!sessionStorage.getItem("isLoggedIn"); // "true" / null
}
function SignOut(menuDiv) {
    sessionStorage.clear();
    menuDiv.innerHTML = "";
    var signInOptions = document.createElement("span");
    signInOptions.innerText = "Sign in";
    signInOptions.setAttribute("style", "color:white; cursor:pointer;");

    signInOptions.addEventListener("click", () => {
        SignInComponent();
    })
    var signUpOptions = document.createElement("span");
    signUpOptions.innerText = "Sign up";
    signUpOptions.setAttribute("style", "color:white;cursor:pointer");

    signUpOptions.addEventListener("click", () => {
        SignUpComponent();
    });

    menuDiv.appendChild(signInOptions);
    menuDiv.appendChild(signUpOptions);

    document.querySelector("#cart-container").innerHTML = "";
    createCart(JSON.parse(localStorage.getItem("productList")));
}

function getBillAmount() {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;
    var totalBill = 0;
    for (var product of cartItems) {
        totalBill = totalBill + product.price * 1 * product.qty * 1;
    }
    return totalBill;
}

function updateQty(productId, index) {
    var qty = document.querySelector("#qtyChange" + index).value;
    var total = document.querySelector("#total" + index);

    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;

    var productIndex = cartItems.findIndex((obj) => { return obj.id == productId });
    var product = cartItems[productIndex];
    product.qty = qty;

    cartItems.splice(productIndex, 1);
    cartItems.splice(productIndex, 0, product);

    currentUserCartList.cartItems = cartItems;

    var currentUserCartListIndex = cartList.findIndex((obj) => { return obj.email == currentUser });
    cartList.splice(currentUserCartListIndex, 1);
    cartList.splice(currentUserCartListIndex, 0, currentUserCartList);
    localStorage.setItem("cartList", JSON.stringify(cartList));

    total.innerText = "" + (product.price * 1 * qty);

    var totalBillLabel = document.querySelector("#totalBillLabel");
    totalBillLabel.innerHTML = "<p>Total Bill : " + getBillAmount() + "</p>";
}

function SearchProduct() {
    var keywords = document.querySelector("#searchKeyword").value;
    var productList = JSON.parse(localStorage.getItem("productList"));
    var filterData = productList.filter((product) => { return product.title.toUpperCase().includes(keywords.toUpperCase()) });

    document.querySelector("#cart-container").remove();
    if (filterData.length == 0)
        createCart(productList);
    else
        createCart(filterData);
}