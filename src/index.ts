import { AdventInput } from "./Input/AdventInput";
import { Puzzle } from "./Puzzles/Puzzle";

import { DayOne } from "./Puzzles/day-one";

const run = async (): Promise<void> => {
    const input = new AdventInput(__dirname + "/data");
    const puzzles: Puzzle[] = [
        new DayOne(input),
    ];

    const solutionPromises = puzzles.map(p => { return { name: p.name, solver: p.solve() }})
                             .map(async s => { return { name: s.name, answer: await s.solver}})
    const solutions = await Promise.all(solutionPromises);
    solutions.sort((a,b) => a.name > b.name ? 1 : -1).forEach( async s => console.log(`${s.name}: ${s.answer}`));
};
run();