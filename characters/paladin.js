const Character = require("./character")
const lightsword = require("../weapons/lightsword")
const lightheal = require("../spells/lightheal")
const config = require("../config/classNames")

class Paladin extends Character {
    constructor(name) {
        super(name, config.classNames.PaladinClassName, 7, 0, 3, 1, 120, 40);
        this.weapons.push(lightsword);
        this.spells.push(lightheal);
    }
}

module.exports = Paladin;