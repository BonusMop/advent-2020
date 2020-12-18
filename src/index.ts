import { AdventInput } from "./Input/AdventInput";
import { Puzzle } from "./Puzzles/Puzzle";

import { DayOne } from "./Puzzles/day-one";
import { DayTwo } from "./Puzzles/day-two";
import { DayThree } from "./Puzzles/day-three";
import { DayFour } from "./Puzzles/day-four";
import { DayFive } from "./Puzzles/day-five";
import { DaySix } from "./Puzzles/day-six";
import { DaySeven } from "./Puzzles/day-seven";
import { DayEight } from "./Puzzles/day-eight";
import { DayNine } from "./Puzzles/day-nine";
import { DayTen } from "./Puzzles/day-ten";

const run = async (): Promise<void> => {
    const input = new AdventInput(__dirname + "/data");
    const puzzles: Puzzle[] = [
        new DayOne(input),
        new DayTwo(input),
        new DayThree(input),
        new DayFour(input),
        new DayFive(input),
        new DaySix(input),
        new DaySeven(input),
        new DayEight(input),
        new DayNine(input),
        new DayTen(input),
    ];

    const solutionPromises = puzzles.map(p => { return { name: p.name, solverOne: p.solveFirst(), solverTwo: p.solveSecond() }})
                             .map(async s => { return { name: s.name, answerOne: await s.solverOne, answerTwo: await s.solverTwo}})
    const solutions = await Promise.all(solutionPromises);
    solutions.sort((a,b) => a.name > b.name ? 1 : -1).forEach( async s => console.log(`${s.name}: ${s.answerOne}, ${s.answerTwo}`));
};
run();