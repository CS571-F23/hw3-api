export class BakedGood {
    public readonly name: string;
    public readonly price: number;
    public readonly featured?: boolean

    public constructor(name: string, price: number, featured?: boolean) {
        this.name = name;
        this.price = price;
        this.featured = featured;
    }
}