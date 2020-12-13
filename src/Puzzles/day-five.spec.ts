import { MockInput } from '../Input/MockInput';
import { BoardingPass } from '../Model/boarding-pass';


test('can get pass details', async () => {
    const pass: BoardingPass = new BoardingPass("BBFFBBFRLL");
    expect(pass.column).toBe(4);
    expect(pass.row).toBe(102);
    expect(pass.id).toBe(820);
});
