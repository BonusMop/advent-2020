import { AdventInput } from "./Input/AdventInput";
import { Puzzle } from "./Puzzles/Puzzle";

import { DayOne } from "./Puzzles/day-one";
import { DayTwo } from "./Puzzles/day-two";

const run = async (): Promise<void> => {
    const input = new AdventInput(__dirname + "/data");
    const puzzles: Puzzle[] = [
        new DayOne(input),
        new DayTwo(input),
    ];

    const solutionPromises = puzzles.map(p => { return { name: p.name, solverOne: p.solveFirst(), solverTwo: p.solveSecond() }})
                             .map(async s => { return { name: s.name, answerOne: await s.solverOne, answerTwo: await s.solverTwo}})
    const solutions = await Promise.all(solutionPromises);
    solutions.sort((a,b) => a.name > b.name ? 1 : -1).forEach( async s => console.log(`${s.name}: ${s.answerOne}, ${s.answerTwo}`));
};
run();