import { Bag } from "./bag";

export class BagContainment {
    private _fitsIn: Bag;
    private _quantity: number;

    constructor(fitsIn: Bag, quantity: number){
        this._fitsIn = fitsIn;
        this._quantity = quantity;
    }

    get fitsIn() {
        return this._fitsIn;
    }

    get quantity() {
        return this._quantity;
    }
}