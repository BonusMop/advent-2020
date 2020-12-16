type Instruction = {
    operation: "nop" | "acc" | "jmp";
    argument: number;
    executed: boolean;
}

export class GameConsole {
    private _code: string[];
    private _instructions: Instruction[];
    private _codePointer: number;
    private _accumulator: number;

    constructor(code: string[]) {
        this._code = code;
        this._instructions = code.map(line => this.parseInstruction(line));
        this._codePointer = 0;
        this._accumulator = 0;
    }

    get accumulator(): number {
        return this._accumulator;
    }

    step(): boolean {
        const instruction = this._instructions[this._codePointer];
        if (instruction.executed) return true; // loop; halt.

        switch(instruction.operation) {
            case 'acc':
                this._accumulator += instruction.argument;
                this._codePointer++;
                break;
            case 'jmp':
                this._codePointer += instruction.argument;
                break;
            case 'nop':
                this._codePointer++;
                break;
        }
        instruction.executed = true;

        return false;
    }

    run(): number {
        while (!this.step()) {}
        return this._accumulator;
    }

    private parseInstruction(line: string): Instruction {
        const groups = line.match(/(?<op>nop|acc|jmp) (?<val>[+-]\d+)/)?.groups;

        if (!groups || (groups["op"] != "nop" && groups["op"] != "acc" && groups["op"] != "jmp")) {
            throw `cannot parse instruction: ${line}`;
        }

        return {
            operation: groups["op"],
            argument: parseInt(groups["val"]),
            executed: false,
        }
    }
}
