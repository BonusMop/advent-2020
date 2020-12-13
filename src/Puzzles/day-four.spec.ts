import { DayFour } from "./day-four";
import { MockInput } from '../Input/MockInput';
import { Passport } from '../Model/passport';

test('can read passport data', async () => {
    const passport = new Passport([
        "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd",
        "byr:1937 iyr:2017 cid:147 hgt:183cm"]);
        expect (passport.birthYear).toBe("1937");
        expect (passport.issueYear).toBe("2017");
        expect (passport.expirationYear).toBe("2020");
        expect (passport.height).toBe("183cm");
        expect (passport.hairColor).toBe("#fffffd");
        expect (passport.eyeColor).toBe("gry");
        expect (passport.passportId).toBe("860033327");
        expect (passport.countryId).toBe("147");
});

test('can count valid passports', async () => {
    const puzzle = new DayFour(new MockInput([
        "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd",
        "byr:1937 iyr:2017 cid:147 hgt:183cm",
        "",
        "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884",
        "hcl:#cfa07d byr:1929",
        "",
        "hcl:#ae17e1 iyr:2013",
        "eyr:2024",
        "ecl:brn pid:760753108 byr:1931",
        "hgt:179cm",
        "",
        "hcl:#cfa07d eyr:2025 pid:166559648",
        "iyr:2011 ecl:brn hgt:59in",
    ]));

    expect(await puzzle.solveFirst()).toBe("2");
});