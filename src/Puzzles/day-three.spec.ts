import { DayThree } from "./day-three";
import { MockInput } from '../Input/MockInput';
import { Slope } from "../Model/slope";

test('can detect trees', async () => {
    const slope: Slope = new Slope(["..#"]);
    expect(slope.treeAt(2,0)).toBe(true);
    expect(slope.treeAt(3,0)).toBe(false);
    expect(slope.treeAt(5,0)).toBe(true);
});

test('can count collisions', async () => {
    const puzzle: DayThree = new DayThree(new MockInput([
        "..##.......",
        "#...#...#..",
        ".#....#..#.",
        "..#.#...#.#",
        ".#...##..#.",
        "..#.##.....",
        ".#.#.#....#",
        ".#........#",
        "#.##...#...",
        "#...##....#",
        ".#..#...#.#",
    ]));

    expect(await puzzle.solveFirst()).toBe("7");
});