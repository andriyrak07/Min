export class Cart {
    constructor(
        public id: number, 
        public userId: number, 
        public date: string,
        public products: any
    ) {}
}