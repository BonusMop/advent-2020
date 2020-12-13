import { PuzzleInput } from "../Input/PuzzleInput";
import { Passport } from "../Model/passport";
import { Puzzle } from "./puzzle";

export class DayFour implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 04";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.stringInputFor(4);
        const passports = this.parsePassports(data);
        let count = 0;

        passports.forEach((passport: Passport) => {
            if (passport.validIgnoringCountry) count++;
        });

        return ""+count;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.stringInputFor(4);
        return "nope";
    }

    private parsePassports(data: string[]): Passport[] {
        const passports: Passport[] = [];
        let group: string[] = [];
        data.forEach(line => {
            if (line.trimEnd() === "") {
                passports.push(new Passport(group));
                group = [];
            } else {
                group.push(line);
            }
        });
        passports.push(new Passport(group));
        return passports;
    }
}