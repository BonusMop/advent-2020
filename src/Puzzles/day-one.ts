import { PuzzleInput } from "../Input/PuzzleInput";
import { Puzzle } from "./puzzle";

export class DayOne implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 01";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.inputFor<number>(1);

        return await this.productOfTwo(data);
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.inputFor<number>(1);

        return await this.productOfThree(data);
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

    async productOfThree(data: number[]): Promise<string> {
        let result: string = "none";

        data.forEach(n => {
            data.forEach(m => {
                data.forEach(l => {
                    if ((n != m) && (n != l) && (n + m + l == 2020)) {
                        result = ""+n*m*l;
                    }
                });
            });
        });
        return result;
    }

}