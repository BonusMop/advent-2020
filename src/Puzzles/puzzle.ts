export interface Puzzle {
    solveFirst(): Promise<string>;
    solveSecond(): Promise<string>;
    readonly name: string;
}