export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Character ${character.name} is already a member of the team`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
