export class Slope {
    private _input: string[];

    constructor(input: string[]) {
        this._input = input;
    }

    treeAt(x: number, y: number): boolean {
        const row = this._input[y].trimEnd();
        const index = x % row.length;
        return row[index] === '#';
    }
}