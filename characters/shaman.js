const Character = require("./character")
const Pet = require("./pet")
const firestaff = require("../weapons/firestaff")
const lightheal = require("../spells/lightheal")
const config = require("../config/classNames")

class Shaman extends Character {
    constructor(name) {
        super(name, config.classNames.ShamanClassName, 6, 6, 8, 3, 100, 100);
        this.pets = [];
        const fireElemental = new Pet("Fire Elemental", 4);
        this.pets.push(fireElemental);
        this.weapons.push(firestaff);
        this.spells.push(lightheal);
    }
}

module.exports = Shaman;