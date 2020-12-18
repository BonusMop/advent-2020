import { MockInput } from '../Input/MockInput';
import { DayTen } from './day-ten';

test ('can solve examples', async () => {
    const puzzle = new DayTen(new MockInput([]));
    const input1 = [
        16,
        10,
        15,
        5,
        1,
        11,
        7,
        19,
        6,
        12,
        4];
    const result1 = puzzle.joltDifferences(input1);
    const count1 = puzzle.joltArrangements(input1);
    expect(result1).toBe(7*5);
    expect(count1).toBe(8);

    const input2 = [
        28,
        33,
        18,
        42,
        31,
        14,
        46,
        20,
        48,
        47,
        24,
        23,
        49,
        45,
        19,
        38,
        39,
        11,
        1,
        32,
        25,
        35,
        8,
        17,
        7,
        9,
        4,
        2,
        34,
        10,
        3];
        const result2 = puzzle.joltDifferences(input2);
        const count2 = puzzle.joltArrangements(input2);
        expect(result2).toBe(22*10);
        expect(count2).toBe(19208);
});
