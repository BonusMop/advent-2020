import { PuzzleInput } from "../Input/PuzzleInput";
import { CustomsDeclaration } from '../Model/customs-declaration';
import { Puzzle } from "./puzzle";

export class DaySix implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 06";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.stringInputFor(6);
        const splitData = this.splitInput(data);
        const declarations = splitData.map(group => new CustomsDeclaration(group));

        let total = 0;
        declarations.forEach( declaration => {
            total += declaration.yeses;
            console.log(declaration.yeses);
        });

        return ""+total;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.stringInputFor(6);
        const splitData = this.splitInput(data);
        const declarations = splitData.map(group => new CustomsDeclaration(group));

        let total = 0;
        declarations.forEach( declaration => {
            total += declaration.unanimousYeses;
            console.log(declaration.unanimousYeses);
        });

        return ""+total;
    }

    private splitInput(input: string[]): string[][] {
        const groups: string[][] = [];
        let group: string[] = [];
        input.forEach(line => {
            if (line.trimEnd() === "") {
                groups.push(group);
                group = [];
            } else {
                group.push(line.trimEnd());
            }
        });
        groups.push(group);
        return groups;
    }
}