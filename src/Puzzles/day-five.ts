import { PuzzleInput } from "../Input/PuzzleInput";
import { BoardingPass } from "../Model/boarding-pass";
import { Puzzle } from "./puzzle";

export class DayFive implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 05";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.stringInputFor(5);
        const passes = data.map(item => new BoardingPass(item)).sort((passa, passb) => passb.id - passa.id);
        return ""+passes[0].id;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.stringInputFor(5);
        const ids = data.map(item => (new BoardingPass(item)).id).sort((a, b) => b - a);
        for (let i=0;i<884;i++) {
            if (ids[i] != 955-i) return ""+(955-i);
        }

        return "error";
    }
}