import { BagContainment } from "./bag-containment"

export class Bag {
    private _containedIn: BagContainment[] = [];
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get containedIn() {
        return this._containedIn;
    }

    get name() {
        return this._name;
    }
}