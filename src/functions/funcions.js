import {doc, getDoc, getFirestore} from "firebase/firestore";

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
    if (size > productsArray.length) {
        productsByComponentsTemp.push(productsList);
    }
    return productsByComponentsTemp
}

export class ProductToAdd {
    constructor(id, quantity) {
        this.id = id;
        this.quantity = quantity;
    }
}

export const printCartProductsDetails = async (cartProducts) => {
    let products = []
    for (let i = 0; i < cartProducts.length; i++) {
        await getProductData(cartProducts[i]).then((result) => products.push(
            new PrintProductCart(result.id, result.quantity, result.title,
                result.description, result.price, (result.quantity*result.price))));
    }
    return products;
}

const getProductData = async (cartProduct) => {
    const db = getFirestore()
    let itemRef = doc(db, 'items', cartProduct.id)
    return await getDoc(itemRef)
        .then(resp =>
            new PrintProductCart(resp.id, cartProduct.quantity,
                    resp.data().title, resp.data().description,
                    resp.data().amount, (cartProduct.quantity * resp.data().amount)))
}

export const getProductByIDFromFirebase = (id) => {
    const db = getFirestore()
    return doc(db, 'items', id)
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

class Product {
    constructor(id, title, subtitle, description, stock, amount, image) {
        this.id = id
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.stock = stock;
        this.amount = amount;
        this.image = image;
    }
}

const addUndefinedProductsToProductsArray = (products) => {
    let productsList = [];
    products.forEach((productL) => {
        let productCreated = Object.assign(new Product(), productL)
        productsList.push(productCreated);
    })
    return productsList;
}

export const filterByCategory = (categoryID, products) => {
    //let list = addUndefinedProductsToProductsArray(products);
    let filteredProducts = products.filter(product => product.category_id == categoryID);
    return filteredProducts
}

export const calculatePrice = async (productsInCart) => {
    let total = 0;
    for (const product of productsInCart) {
        let prod = await getProductData(product)
        total += prod.price * prod.quantity
    }
    return formatTotal(total);
}

const formatTotal = (total) => {
    let format = total.toString()
    if (total>999 && total <= 9999) {
        return format.charAt(0).concat('.', format.substring(1, format.length))
    } else if (total>9999 && total <= 99999) {
        return format.charAt(0).concat(format.charAt(1),'.', format.substring(2, format.length))
    } else if (total>99999 && total <= 999999) {
        return format.charAt(0).concat(format.charAt(1),format.charAt(2),'.', format.substring(3, format.length))
    } else if (total>999999 && total <= 9999999){
        return format.charAt(0).concat(format.charAt(1),format.charAt(2),format.charAt(3),'.', format.substring(4, format.length))
    } else {
        return format
    }
}

// export const createProds = async () => {
//     for (let i = 0; i < products.length; i++) {
//         const db = getFirestore()
//         const itemsCollection = collection(db, 'items')
//         await addDoc(itemsCollection, products[i])
//     }
// }