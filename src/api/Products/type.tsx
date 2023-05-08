export interface TypeFormProducts {

    id?: number,
    name: string,
    price: number,
    sales: number,
    priceToPay: number;
    image: string,
    itemImage?: ITypeItemImage[],
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string,
    slug: string,
    like: number
    brand: string,
    point: number,
    sold: boolean,
    categoryProductsId?: object,
    content: string
}

export interface ITypeItemImage {

    id?: number,
    name?: string
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
