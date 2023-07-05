export interface IProducts {
    sum:      number;
    products: IProduct[];
}

export interface IProduct {
    _id?:     string;
    name:    string;
    cost:    number;
    price:   number;
    minimum: number;
}
