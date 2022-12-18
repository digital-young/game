
const Shaman = require("./characters/shaman");
const Mage = require("./characters/mage");
const Paladin = require("./characters/paladin")
const shaman = new Shaman("woof shaman");

const prompt = require("prompt-promise");

const mobs = require("./mobs/mobs")
const config = require("./config/classNames");



async function gameLoop() {
    // in my game loop, at the start, i want to get the class choice form the user.
    // they can pick shaman, mage, or paladin.

    // im going to store my character in this variable. once i pick a class,
    // i will create that class, and put it in the character variable.
    let character;

    const classChoice = await prompt("Select your class: shaman, mage, or paladin");
    console.log("my class choice is", classChoice);
    if(classChoice === config.classNames.MageClassName) {
        character = new Mage("Woof");
    } else if(classChoice === config.classNames.ShamanClassName) {
        character = new Shaman("Woof");
    } else if(classChoice === config.classNames.PaladinClassName) {
        character = new Paladin("Woof");
    } else {
        throw Error("you typed a class that doesn't exist!")
    }

    // spawn a random mob, then lets prompt to fight it.
    // lets just take the first mob in the array, then if we beat it, we can fight the second one.
    let mob = mobs[0]; // this should be the goblin. mobs [1] should be the dragon
    console.log("A wild " + mob.name + " appears")
    console.log(mob.name + " has " + mob.health + " health " )

    while(character.health > 0 && mob.health > 0) {
        // while BOTH my character AND the mob im fighting both have health, we fight.
        // when ONE of them stops having health, ie: its below 0 or equal to 0. this block will stop running.
        console.log("Your character's spells");
        console.log(character.spells);
        const move = await prompt("Select a move: fight, or spell")
        console.log("You selected: " + move);
        const damage = character.getDamage(move);
        console.log("You attack for " + damage);
        const mobDamage = mob.damage;
        console.log(mob.name + " hits you for " + mob.damage);
        mob.health = mob.health - damage;
        character.health = character.health - mobDamage;
        console.log("Your health is " + character.health);
        console.log(mob.name + "'s health is " + mob.health);
    }

    console.log("Fight over");
}

gameLoop();