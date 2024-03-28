import Character from '../Character';

test('getting error for undefined type of characters', () => {
  class AnotherCharacter extends Character {
    constructor(name) {
      super(name, 'AnotherCharacter');
    }
  }

  expect(() => new AnotherCharacter('Name')).toThrow('Нет такого типа персонажа');
});
