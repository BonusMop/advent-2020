import { PuzzleInput } from "../Input/PuzzleInput";
import { Puzzle } from "./puzzle";
import { PasswordEntry } from "../Model/password-entry"

export class DayTwo implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 02";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.stringInputFor(2);
        const entries = data.map(item => new PasswordEntry(item));

        let validCount = 0;
        entries.forEach(entry => {
            if (entry.valid()) validCount++;
        });

        return ""+validCount;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.stringInputFor(2);
        const entries = data.map(item => new PasswordEntry(item));

        let validCount = 0;
        entries.forEach(entry => {
            if (entry.validNew()) validCount++;
        });

        return ""+validCount;
    }
}