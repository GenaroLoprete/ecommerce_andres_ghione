import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore";
import {PrintProductCart, Product} from "./classes";

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

const addUndefinedProductsToProductsArray = (products) => {
    let productsList = [];
    products.forEach((productL) => {
        let productCreated = Object.assign(new Product(), productL)
        productsList.push(productCreated);
    })
    return productsList;
}

export const filterByCategory = (categoryID, products) => {
    let filteredProducts = products.filter(product => product.category_id == categoryID);
    return filteredProducts
}

export const calculatePrice = async (productsInCart) => {
    let total = 0;
    for (const product of productsInCart) {
        let prod = await getProductData(product)
        total += prod.price * prod.quantity
    }
    return total;
}

export const formatTotal = (total) => {
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

export function createBuyer(firstName, lastName, phone, email) {
    const buyer = {}
    buyer.name = firstName + ' ' + lastName
    buyer.phone = phone
    buyer.email = email
    return buyer;
}

const formatProducts = (productsInCart) => {
    let prods = []
    productsInCart.forEach(prod => {
        let product = {}
        product.id = prod.id
        product.quantity = prod.quantity
        prods.push(product)
    })
    return prods
}

export function createOrder(buyer, total, productsInCart) {
    const date = new Date();
    const localDate = date.toLocaleDateString();
    const order = {}
    order.buyer = buyer
    order.items = formatProducts(productsInCart)
    order.date = localDate
    order.total = total
    return order;
}

export async function validateData(firstName, lastName, phone, email, products) {
    if (firstName != undefined && firstName != null && firstName != "" &&
        lastName != undefined && lastName != null && lastName != "" &&
        phone != undefined && phone != null && phone != "" &&
        email != undefined && email != null && email != "" && products.length > 0) {
        let result = await checkStocks(products).then(r => r).finally()
        if(result){
            return true
        }
    }
    return false;
}

export const checkStocks = async (products) => {
    let result = true
    const db = getFirestore()
    for (const prod of products) {
        let collection = doc(db, 'items', prod.id)
        let prodResult;
        await getDoc(collection)
            .then(resp => prodResult = {id: resp.id, ...resp.data()})
        if(prodResult.stock < prod.quantity){
            result = false
            break
        }
    }
    return result
}