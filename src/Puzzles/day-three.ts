import { PuzzleInput } from "../Input/PuzzleInput";
import { Puzzle } from "./puzzle";
import { Slope } from "../Model/slope"

export class DayThree implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 03";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.stringInputFor(3);
        const trees = this.solveForSlope(data, 3, 1);
        return ""+trees;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.stringInputFor(3);
        const a1 =this.solveForSlope(data, 1, 1);
        const a2 =this.solveForSlope(data, 3, 1);
        const a3 =this.solveForSlope(data, 5, 1);
        const a4 =this.solveForSlope(data, 7, 1);
        const a5 =this.solveForSlope(data, 1, 2);
        return ""+(a1*a2*a3*a4*a5);
    }

    private solveForSlope(data: string[], right: number, down: number) {
        let trees = 0;
        const slope = new Slope(data);
        for (let row = 0; row < data.length / down; row++) {
            if (slope.treeAt(row * right, row * down)) trees++;
        }
        return trees;
    }
}