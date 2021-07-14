export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string') {
            throw new Error('incorrect value input');
        }
        if (name.length < 2) {
            throw new Error('too short name inputed');
        }
        if (name.length > 10) {
            throw new Error('too long name inputed');
        }

        this.name = name;
        this.type = type;
        this.level = 1;
        this.health = 100;
    }

    levelUp() {
        if (this.health > 0) {
            this.level += this.level;
            this.attack += (this.attack * 0.2);
            this.defence += (this.defence * 0.2);
            this.health = 100;
        } else {
            throw new Error('you can\'t promote level of dead creature');
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
