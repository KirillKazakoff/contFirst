export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        this.members.forEach((element) => {
            if (element === character) {
                throw new Error('you have the same element in set');
            }
        });
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((character) => this.members.add(character));
    }

    toArray() {
        return [...this.members];
    }
}
