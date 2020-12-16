import { MockInput } from '../Input/MockInput';
import { GameConsole } from '../Model/game-console';

test ('can run bad program', async () => {
    const gameConsole = new GameConsole([
        "nop +0",
        "acc +1",
        "jmp +4",
        "acc +3",
        "jmp -3",
        "acc -99",
        "acc +1",
        "jmp -4",
        "acc +6",
    ]);

    expect(gameConsole.accumulator).toBe(0);
    gameConsole.step();
    gameConsole.step();
    expect(gameConsole.accumulator).toBe(1);
    gameConsole.step();
    gameConsole.step();
    expect(gameConsole.accumulator).toBe(2);
    gameConsole.run();
    expect(gameConsole.error).toBe(true);
    expect(gameConsole.accumulator).toBe(5);
});

test ('can run good program', async () => {
    const gameConsole = new GameConsole([
        "nop +0",
        "acc +1",
        "jmp +4",
        "acc +3",
        "jmp -3",
        "acc -99",
        "acc +1",
        "nop -4",
        "acc +6",
    ]);

    gameConsole.run();
    expect(gameConsole.error).toBe(false);
    expect(gameConsole.accumulator).toBe(8);
});