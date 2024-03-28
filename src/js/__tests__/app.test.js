import Team from '../app';
import Character from '../Character';

const bowman = new Character('AAA', 'Bowman');

const daemon = new Character('AAA', 'Daemon');

test('должна добавлять персонажа в Set', () => {
  const testAddSet = new Set();
  const expected = testAddSet.add(bowman);

  const team = new Team();
  team.add(bowman);
  const received = team.members;

  expect(received).toEqual(expected);
});

test('должна генерировать ошибку при дублировании персонажа', () => {
  function testError() {
    const test = new Team();
    test.addAll(bowman, daemon);
    test.add(bowman);
  }

  expect(testError).toThrowError(Error);
});

test('должна добавлять несколько персонажей в Set', () => {
  const testAddAllSet = new Set();
  const expected = testAddAllSet.add(bowman).add(daemon);

  const team = new Team();
  team.addAll(bowman, daemon);
  const received = team.members;

  expect(received).toEqual(expected);
});

test('должна ковертировать Set в массив', () => {
  const newTeam = new Team();
  const player1 = new Character('AAA', 'Daemon');
  const player2 = new Character('BBB', 'Daemon');
  newTeam.addAll(player1, player2);
  const res = newTeam.toArray();
  expect(res).toEqual([
    {
      health: 100, level: 1, name: 'AAA', type: 'Daemon',
    },
    {
      health: 100, level: 1, name: 'BBB', type: 'Daemon',
    }]);
});
