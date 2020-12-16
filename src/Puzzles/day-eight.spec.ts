import { MockInput } from '../Input/MockInput';
import { GameConsole } from '../Model/game-console';

test ('can run program', async () => {
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
    const result = gameConsole.run();
    expect(result).toBe(5);
});