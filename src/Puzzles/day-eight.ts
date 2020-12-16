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
        gameConsole.run();
        return ""+gameConsole.accumulator;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.stringInputFor(8);

        const gameConsole = new GameConsole(data);
        for (let i = 0; i<gameConsole.instructions.length; i++) {
            if (gameConsole.instructions[i].operation == "nop") {
                gameConsole.instructions[i].operation = "jmp";
                gameConsole.run();
                gameConsole.instructions[i].operation = "nop"
            } else if (gameConsole.instructions[i].operation == "jmp") {
                gameConsole.instructions[i].operation = "nop";
                gameConsole.run();
                gameConsole.instructions[i].operation = "jmp"
            } else {
                continue;
            }
            if (!gameConsole.error) return ""+gameConsole.accumulator;
            gameConsole.reset();
        }

        return "error";
    }
}
