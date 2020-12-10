import { DayTwo } from "./day-two";
import { MockInput } from '../Input/MockInput';

test('check passwords', async () => {
    const puzzle: DayTwo = new DayTwo(new MockInput([
        "1-3 a: abcde",
        "1-3 b: cdefg",
        "2-9 c: ccccccccc",
    ]));
    expect(await puzzle.solve()).toBe("2");
});