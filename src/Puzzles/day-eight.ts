import { PuzzleInput } from "../Input/PuzzleInput";
import { GameConsole } from "../Model/game-console";
import { Puzzle } from "./puzzle";

export class DayEight implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 08";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.stringInputFor(8);
        const gameConsole = new GameConsole(data);
        return ""+gameConsole.run();
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.stringInputFor(8);
        return "not implemented";
    }
}
