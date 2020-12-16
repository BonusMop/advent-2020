import { BagContainment } from "./bag-containment"

export class Bag {
    private _containedIn: BagContainment[] = [];
    private _contains: BagContainment[] = [];
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get containedIn() {
        return this._containedIn;
    }

    get contains() {
        return this._contains;
    }

    get name() {
        return this._name;
    }
}