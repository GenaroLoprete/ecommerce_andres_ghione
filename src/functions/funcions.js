import {filterItem} from "../helpers/mocks";

export const createContainerWithSpecificSize = (size, productsArray) => {
    let productsCount = 0;
    let productsList = [];
    let productsByComponentsTemp = []
    for (let i = 0; i < productsArray.length; i++) {
        if (productsCount === size) {
            productsByComponentsTemp.push(productsList);
            productsList = [];
            productsCount = 0;
        } else {
            productsList.push(productsArray[i])
            productsCount++;
        }
    }
    return productsByComponentsTemp
}

export class ProductToAdd {
    constructor(id, quantity) {
        this.id = id;
        this.quantity = quantity;
    }
}

export const printCartProductsDetails = (cartProducts) => {
    let products = []
    for (let i = 0; i < cartProducts.length; i++) {
        let resp = filterItem(cartProducts[i].id)
        let prod = new PrintProductCart(cartProducts[i].id, cartProducts[i].quantity,
            resp[0].title, resp[0].description, resp[0].amount, (cartProducts[i].quantity * resp[0].amount))
        products.push(prod)
    }
    return products
}

export class PrintProductCart {
    constructor(id, quantity, title, description, price, total) {
        this.id = id;
        this.quantity = quantity;
        this.title = title;
        this.description = description;
        this.price = price;
        this.total = total;
    }
}