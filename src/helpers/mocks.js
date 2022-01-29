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
let product1 = new Product(1, 'Camera', "Coolpix B B500", "Nikon manufactures cameras with " +
    "state-of-the-art technology and excellence in quality. Its products allow you to explore all your creativity",
    9, 490, "https://picsum.photos/id/250/318/180");
let product2 = new Product(2,"Teapot", "In earthenware", "Beautiful old teapot with an approximate capacity " +
    "of 700 cc and a milk jug with an approximate capacity of 180 cc.", 8, 40, "https://picsum.photos/id/225/318/180")
let product3 = new Product(3,"Macbook Air", "13 inches, 2020, Chip M1, 256 GB de SSD, 8 GB RAM", "Apple's thinnest and lightest " +
    "notebook comes with the superpowers of the M1 chip", 18, 1689, "https://picsum.photos/id/48/318/180")
let product4 = new Product(4,"Typewriter", "Vintage antique decoration", "Antique typewriter - Sheet metal ornament size: 33x18x25cm",
    39, 690, "https://picsum.photos/id/486/318/180")
let product5 = new Product(5,"Dining set", "Table + 6 wooden chairs", "Dining set, table + 6 chairs. White, fabric upholstery", 13,
    412, "https://picsum.photos/id/625/318/180")
let product6 = new Product(6,"Wireless joystick for PS3", "2.4 GHz control the action from a distance of 9 meters",
    "Ergonomic, play with maximum comfort. Works with 2 AA batteries which can be rechargeable", 0,
    14, "https://picsum.photos/id/96/318/180")
let products = [product1, product2, product3, product4, product5, product6]

export const obtainProducts = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve(products)
    }, 3000)
});

export const getItems = new Promise((resolve) => {
    setTimeout(() => {
        resolve(product1)
    }, 2000)
});