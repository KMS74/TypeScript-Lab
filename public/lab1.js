"use strict";
class Product {
    constructor(id, productName, price, description) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.description = description;
        console.log("Product has initialized");
    }
    hasDiscount() {
        return true;
    }
    discount(value) {
        return this.hasDiscount() ? value * 0.1 : 0;
    }
    show() {
        return `Product name = ${this.productName}, price = ${this.price}, description = ${this.description}`;
    }
}
// creating product obejct
let product = new Product(1, "Labtop", 20000, "Dell core i7");
console.log(product.show());
// creating array of products
let productsArr = [
    product,
    new Product(2, "Iphone", 18000, "description of the product.."),
    new Product(3, "TV", 40000, "description of the product.."),
    new Product(4, "Car", 500000, "description of the product.."),
];
showDetails(productsArr);
function showDetails(products) {
    products.forEach((product) => {
        console.log(`Product name = ${product.productName}, price = ${product.price}, description = ${product.description}`);
    });
}
