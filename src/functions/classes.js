export class ProductToAdd {
    constructor(id, quantity) {
        this.id = id;
        this.quantity = quantity;
    }
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

export class Product {
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