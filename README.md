Game

In our game, you can choose a class, level up, cast spells, and attack mobs until you die.

# Day 1 of game

I want to be able to level up a character, and increase its stats.

The stats of each character: 
Level
Attack
Magic
Defense
Speed
Health
Mana

In our game, 10 is a very strong stat, the max. To start with 1 is the lowest.
These are the boundaries we are going to define.

Health and mana are different. They have no bounds.

Mage is a high mana, high magic but low HP/attack character that starts with the Fireball spell.

Shaman is a mid-range allrounder, that startrs with a Fire Elemental pet and the weapon Firestaff and Light Heal.

Paladin is a high health, high attack but low mana/speed character that starts with weapon Lightsword and Light Heal.

## Game Rules

Our game logic dictates a character's damage is calculated using this algorithm:

- If a character has an activePet, we take teh activePet's damage as starting value, and add it to the character's magic damage.
- If a character is casting a spell, we take the spell's damage and add it to the character's magic damage.
- If a character has neither an activePet, nor a spell, we take their weapon's damage, and add it to the character's attack damage.

## Pet Logic

A character can have an array of pets, but can only have a single active pet. They have to summon the pet.