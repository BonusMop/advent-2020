import { MockInput } from '../Input/MockInput';
import { CustomsDeclaration } from '../Model/customs-declaration';
import { DaySix } from './day-six';

test('can get customs count', async () => {
    const declaration = new CustomsDeclaration([
        "abcx",
        "abcy",
        "abcz",
    ]);

    expect(declaration.yeses).toBe(6);
});

test ('can count all groups', async () => {
    const puzzle = new DaySix(new MockInput([
        "abc",
        "",
        "a",
        "b",
        "c",
        "",
        "ab",
        "ac",
        "",
        "a",
        "a",
        "a",
        "a",
        "",
        "b",
    ]));

    expect(await puzzle.solveFirst()).toBe("11");
});
