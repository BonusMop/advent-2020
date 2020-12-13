export class BoardingPass {
    private _code: string;

    constructor(code: string) {
        this._code = code;
    }

    get row(): number {
        let result = 0;
        for (let i=0; i<7; i++) {
            if (this._code[i] === 'B') {
                result += 2**(6-i);
            }
        }
        return result;
    }

    get column(): number {
        let result = 0;
        for (let i=0; i<3; i++) {
            if (this._code[i+7] === 'R') {
                result += 2**(2-i);
            }
        }
        return result;
    }

    get id(): number {
        return this.row * 8 + this.column;
    }
}