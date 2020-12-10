export class PasswordEntry {
    private _input: string;
    private _min: number;
    private _max: number;
    private _req: string;
    private _password: string;

    constructor(input: string) {
        this._input = input;
        const passExpression = /(?<min>\d+)-(?<max>\d+) (?<req>[a-z]): (?<password>[a-z]+)/;
        const groups = input.match(passExpression)?.groups;
        this._min = groups ? parseInt(groups['min']) || 1 : 1;
        this._max = groups ? parseInt(groups['max']) || 1 : 1;
        this._req = groups ? groups['req'] : "";
        this._password = groups ? groups['password'] : ""; 
    }

    get minOccurrences() {
        return this._min;
    }

    get maxOccurrences() {
        return this._max;
    }

    get requirement() {
        return this._req;
    }

    get password() {
        return this._password;
    }

    valid(): boolean {
        const reqRe = new RegExp(this._req,"g");
        const totalCount = this._password.length;
        const otherCount = this._password.replace(reqRe,"").length;
        const reqCount = totalCount - otherCount;
        
        return this._min <= reqCount && reqCount <= this._max;
    }

    validNew(): boolean {
        let count = 0;
        if (this._password[this._min-1] === this._req) count++;
        if (this._password[this._max-1] === this._req) count++;
        return count == 1;
    }
}