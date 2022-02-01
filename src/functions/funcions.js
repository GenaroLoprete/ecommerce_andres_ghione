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

export class SelectedProduct {
    constructor(id, amount, quantity) {
        this.id = id;
        this.amount = amount;
        this.quantity = quantity;
    }
}