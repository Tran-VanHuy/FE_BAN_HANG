export interface TypeFormProducts {

    id?: number,
    name: string,
    price: number,
    sales: number,
    priceToPay: number;
    image: string,
    slug: string,
    like: number
    brand: string,
    point: number,
    sold: boolean,
    categoryProductsId?: object
}

export interface TypeIdProduct {

    id: number,
}

export interface TypeCreateFormOrder {
    userName: string,
    phone: string,
    address: string,
    products: TypeIdProduct,
}
