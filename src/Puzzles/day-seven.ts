import { PuzzleInput } from "../Input/PuzzleInput";
import { Bag } from "../Model/bag";
import { BagContainment } from "../Model/bag-containment";
import { Puzzle } from "./puzzle";

type BagCollection = { [name: string]: Bag };

export class DaySeven implements Puzzle {
    protected _input: PuzzleInput;

    public get name(): string {
        return "Day 07";
    }

    constructor(input: PuzzleInput) {
        this._input = input;
    }

    async solveFirst(): Promise<string> {
        const data = await this._input.stringInputFor(7);
        const bags = this.bagGraph(data);

        const allowed = this.allowedFor(bags['shiny gold']);
        return ""+allowed.length;
    }

    async solveSecond(): Promise<string> {
        const data = await this._input.stringInputFor(7);
        return "not implemented";
    }

    private getOrCreateBag(name: string, bags: BagCollection): Bag {
        if (bags[name]) return bags[name];
        bags[name] = new Bag(name);
        return bags[name];
    }

    private allowedFor(bag: Bag): string[] {
        if (!bag) return [];

        let result: string[] = [];
        bag.containedIn.forEach(containment => {
            const allowed = this.allowedFor(containment.fitsIn);
            result = [...result, ...allowed, containment.fitsIn.name];
        });
        return [...new Set(result)]; // only unique answers
    }

    private bagGraph(data: string[]): BagCollection {
        const bags: BagCollection = {};
        data.forEach(rule => {
            const name = rule.split(" bags")[0];
            const outerBag = this.getOrCreateBag(name, bags);
            rule.match(/\d+ [^.,]+ bag/g)?.forEach((match) => {
                const groups = match.match(/(?<num>\d+) (?<color>[^.,]+) bag/)?.groups;
                if (groups) {
                    const innerBag = this.getOrCreateBag(groups['color'], bags);
                    innerBag.containedIn.push(new BagContainment(outerBag, parseInt(groups['num'])));
                }
            });
        });

        return bags;
    }
}
