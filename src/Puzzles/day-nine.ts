import { PuzzleInput } from "../Input/PuzzleInput";
import { Puzzle } from "./puzzle";

export class DayNine implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 09";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.inputFor<number>(9);
        const result = this.firstInvalid(data, 25);
        return ""+result;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.inputFor<number>(9);
        return "not implemented";
    }

    firstInvalid(input: number[], preambleSize: number): number {
        for (let i = preambleSize; i < input.length; i++) {
            let valid = false;
            for (let x = i - preambleSize; x < i - 1; x++) {
                for (let y = x + 1; y < i; y++) {
                    if (input[x] + input[y] == input[i]) valid = true;
                }
            }
            if (!valid) return input[i];
        }
        return -1;
    }
}
