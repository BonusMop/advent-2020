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
        const slope = new Slope(data);
        let trees = 0;

        for (let row = 0; row < data.length; row++) {
            if (slope.treeAt(row * 3, row)) trees++;
        }

        return ""+trees;
    }

    async solveSecond(): Promise<string> {
        return "nope";
    }
}