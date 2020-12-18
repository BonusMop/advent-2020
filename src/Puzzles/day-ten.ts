import { PuzzleInput } from "../Input/PuzzleInput";
import { Puzzle } from "./puzzle";

export class DayTen implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 10";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.inputFor<number>(10);
        const result = this.joltDifferences(data);
        return ""+result;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.inputFor<number>(10);
        const result = this.joltArrangements(data);
        return ""+result;
    }

    joltDifferences(input: number[]) {
        const sortedJolts = [0, ...input.sort((a,b) => a - b)];
        sortedJolts.push(sortedJolts[sortedJolts.length - 1] + 3);

        const results: { [key: number]: number } = {};
        for (let i = 1; i<sortedJolts.length; i++) {
            const diff = sortedJolts[i] - sortedJolts[i-1];
            if (!results[diff]) {
                results[diff] = 1;
            } else {
                results[diff]++;
            }
        }

        return results[1] * results[3];
    }

    joltArrangements(input: number[]) {
        const sortedJolts = [0, ...input.sort((a,b) => a - b)];
        sortedJolts.push(sortedJolts[sortedJolts.length - 1] + 3);

        const solutionCount = new Array(sortedJolts.length);
        solutionCount[0] = 1;
        for (let i = 1; i<sortedJolts.length; i++) {
            solutionCount[i] = 0;
            if (i >= 3 && sortedJolts[i] - sortedJolts[i-3] <= 3) solutionCount[i]+=solutionCount[i-3];
            if (i >= 2 && sortedJolts[i] - sortedJolts[i-2] <= 3) solutionCount[i]+=solutionCount[i-2];
            if (i >= 1 && sortedJolts[i] - sortedJolts[i-1] <= 3) solutionCount[i]+=solutionCount[i-1];
        }

        return solutionCount[sortedJolts.length - 1];
    }
}
