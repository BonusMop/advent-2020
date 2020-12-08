import { PuzzleInput } from "../Input/PuzzleInput";
import { Puzzle } from "./puzzle";

export class DayOne implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 01a";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solve(): Promise<string> {
        const data = await this._input.inputFor<number>(1);

        return await this.productOfTwo(data);
    }

    async productOfTwo(data: number[]): Promise<string> {
        let result: string = "none";

        data.forEach(n => {
            data.forEach(m => {
                
                if ((n != m) && (n + m == 2020)) {
                    result = ""+n*m;
                }
            });
        });
        return result;
    }

}