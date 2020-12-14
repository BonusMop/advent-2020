export class CustomsDeclaration {
    private _input: string[];
    private _answers: { [key: string]: number } = {};

    constructor(input: string[]) {
        this._input = input;
        input.forEach(line => {
            const onePersonsAnswers = line.trim();
            for (let i = 0; i<onePersonsAnswers.length; i++)
            {
                const oneAnswer = onePersonsAnswers[i];
                if (!this._answers[oneAnswer]) this._answers[oneAnswer] = 0;
                this._answers[oneAnswer]++;
            }
        });
    }

    get yeses() {
        return Object.keys(this._answers).length;
    }

    get unanimousYeses() {
        return Object.values(this._answers).filter(count => count === this._input.length).length;
    } 
}