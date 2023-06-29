export class Producto {
    _id?: string;
    //El signo ? indica que puede ser nulo, porque en nuestro caso del front puede estar como no
    name: string;
    description: string;
    price: number;
    stock: number

    constructor(name: string, description: string, price: number, stock: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}