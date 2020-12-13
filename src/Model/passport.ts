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
        const result = parseInt(this._data['byr']);
        return isNaN(result) ? undefined : result;
    }

    get issueYear() {
        const result = parseInt(this._data['iyr']);
        return isNaN(result) ? undefined : result;
    }

    get expirationYear() {
        const result = parseInt(this._data['eyr']);
        return isNaN(result) ? undefined : result;
    }

    get height() {
        const groups = this._data['hgt']?.match(/(?<mag>\d+)(?<unit>in|cm)/)?.groups;
        if (!groups) return undefined;
        const mag = parseInt(groups['mag']);
        const unit = groups['unit'];
        return isNaN(mag) ? undefined : { magnitude: mag, units: unit };
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
        return this._data['byr'] != undefined &&
            this._data['iyr'] != undefined &&
            this._data['eyr'] != undefined &&
            this._data['hgt'] != undefined &&
            this._data['hcl'] != undefined &&
            this._data['ecl'] != undefined &&
            this._data['pid'] != undefined;
    }

    get byrValid() {
        return this.birthYear != undefined && this.birthYear >= 1920 && this.birthYear <= 2002;
    }

    get iyrValid() {
        return this.issueYear != undefined && this.issueYear >= 2010 && this.issueYear <= 2020
    }

    get eyrValid() {
        return this.expirationYear != undefined && this.expirationYear >= 2020 && this.expirationYear <= 2030
    }

    get hgtValid() {
        if (this.height?.units == "cm") {
            if (this.height.magnitude >= 150 && this.height.magnitude <= 193) return true;
        }
        if (this.height?.units == "in") {
            if (this.height.magnitude >= 59 && this.height.magnitude <= 76) return true;
        }
        return false;
    }

    get hclValid() {
        return /#[0-9a-f]{6}/.test(this.hairColor) && this.hairColor.length == 7;
    }

    get eclValid() {
        return /amb|blu|brn|gry|grn|hzl|oth/.test(this.eyeColor);
    }

    get pidValid() {
        return /\d{9}/.test(this.passportId) && this.passportId.length == 9;
    }

    get strictValidIgnoringCountry() {
        return this.byrValid &&
            this.iyrValid &&
            this.eyrValid &&
            this.hgtValid &&
            this.hclValid &&
            this.eclValid &&
            this.pidValid;
    }

    toString() {
        return `byr: ${this._data['byr']} iyr: ${this._data['iyr']} eyr: ${this._data['eyr']} hgt: ${this._data['hgt']} hcl: ${this._data['hcl']} ecl: ${this._data['ecl']} pid: ${this._data['pid']}`;
    }
}