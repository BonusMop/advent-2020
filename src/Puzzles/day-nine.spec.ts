import { MockInput } from '../Input/MockInput';
import { DayNine } from './day-nine';

test ('can find invalid entries', async () => {
    const puzzle = new DayNine(new MockInput([]));
    const input = [
        35,
        20,
        15,
        25,
        47,
        40,
        62,
        55,
        65,
        95,
        102,
        117,
        150,
        182,
        127,
        219,
        299,
        277,
        309,
        576];
    const result = puzzle.firstInvalid(input, 5);
    const rangeFor = puzzle.rangeFor(input, 127);

    expect(result).toBe(127);
    expect(rangeFor).toBe(62);
});
