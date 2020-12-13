export class Passport {
    private _input: string[];
    private _data: { [key: string]: string };

    constructor(input: string[])
    {
        this._input = input;
        this._data = {};
        const dataRe = /[a-z]{3}:[\w#]+/g;
        input.forEach((item) => {
            const matches = item.match(dataRe);
            matches?.forEach((match) => {
                const pair = match.split(':');
                this._data[pair[0]] = pair[1];
            });
        });
    }

    get birthYear() {
        return this._data['byr'];
    }

    get issueYear() {
        return this._data['iyr'];
    }

    get expirationYear() {
        return this._data['eyr'];
    }

    get height() {
        return this._data['hgt'];
    }

    get hairColor() {
        return this._data['hcl'];
    }

    get eyeColor() {
        return this._data['ecl'];
    }

    get passportId() {
        return this._data['pid'];
    }

    get countryId() {
        return this._data['cid'];
    }

    get validIgnoringCountry() {
        return this.birthYear != undefined &&
            this.issueYear != undefined &&
            this.expirationYear != undefined &&
            this.height != undefined &&
            this.hairColor != undefined &&
            this.eyeColor != undefined &&
            this.passportId != undefined;
    }
}