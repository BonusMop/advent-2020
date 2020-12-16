import { Bag } from "./bag";

export class BagContainment {
    private _bag: Bag;
    private _quantity: number;

    constructor(bag: Bag, quantity: number){
        this._bag = bag;
        this._quantity = quantity;
    }

    get bag() {
        return this._bag;
    }

    get quantity() {
        return this._quantity;
    }
}