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
        const result = this.rangeFor(data, 776203571); // 776203571 is the answer to part one.
        return ""+result;
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

    rangeFor(input: number[], target: number): number {
        let start = 0;
        let end = 1;
        let sum = input[start] + input[end];
        while (sum != target) {
            if (start == end - 1) {
                // If it's a contiguous pair and not the right sum,
                // always move the upper bound even if we're over.
                end++;
                sum+=input[end];
                continue;
            }
            if (sum < target) {
                end++;
                sum+=input[end];
                continue;
            }
            if (sum > target) {
                sum-=input[start];
                start++;
                continue;
            }
        }

        let min = input[start];
        let max = input[start];
        for (let i = start; i < end + 1; i++) {
            if (input[i] > max) max = input[i];
            if (input[i] < min) min = input[i];
        }
        return min+max;
    }
}
