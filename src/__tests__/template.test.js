import {
    Bowman, Daemon, Magician, Swordman, Undead, Zombie,
} from '../js/allChars';

import Team from '../js/app';

const charList = [
    new Bowman('Clinkz'),
    new Daemon('Fiend'),
    new Magician('Chen'),
    new Swordman('Sven'),
    new Undead('Pugna'),
    new Zombie('Undying'),
];

test('add method check', () => {
    const expected = new Set([
        new Bowman('Clinkz'),
        new Daemon('Fiend'),
    ]);
    const team = new Team();

    team.add(charList[0]);
    team.add(charList[0]);
    team.add(charList[1]);
    expect(team.members).toEqual(expected);
});

test('addAll method check', () => {
    const expected = new Set([
        new Bowman('Clinkz'),
        new Daemon('Fiend'),
    ]);
    const team = new Team();

    team.addAll(charList[0], charList[1], charList[0], charList[1]);
    expect(team.members).toEqual(expected);
});

test('toArray method check', () => {
    const expected = [
        new Bowman('Clinkz'),
        new Daemon('Fiend'),
    ];
    const team = new Team();

    team.addAll(charList[0], charList[1], charList[0], charList[1]);
    const result = team.toArray();
    expect(result).toEqual(expected);
});
