/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(mattersNot) {
        this.createdAt = mattersNot.createdAt;
        this.name = mattersNot.name;
        this.dimensions = mattersNot.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
  };
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  class CharacterStats extends GameObject{
      constructor(statLine) {
          super(statLine);
          this.healthPoints = statLine.healthPoints;
      }
    takeDamage() {
        return `${this.name} took damage!`;
    }
  };
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  class Humanoid extends CharacterStats{
    constructor(yourPerson) {
        super(yourPerson);
        this.team = yourPerson.team;
        this.weapons = yourPerson.weapons;
        this.language = yourPerson.language;
    }
   greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
   }
  };
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  class Villain extends Humanoid {
  constructor(badGuy) {
      super(badGuy);
      this.team = `EVIIIIL`;
      this.victory = `The world is overtaken by darkness.`;
  };
  punch(person) {
    if (person.healthPoints > 0) {
        return person.healthPoints -= 2;
      } else {
        return `${person.destroy()} ${this.victory}`;
      };
  }
  }
  
    const sauron = new Villain({
      createdAt : new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 10,
      },
      healthPoints: 100,
      name: `Sauron`,
      weapons: [
        `Eye`,
        `The Ring`,
      ],
      language: `all of them`,
    });
  
  
    class Hero extends Humanoid{
      constructor(goodGuy) {
          super(goodGuy);
          this.team = `Avengers`;
          this.victory = `The world is saved!`;
      }
      punch(person) {
        if (person.healthPoints > 0) {
            return person.healthPoints -= 10;
          } else {
            return `${person.destroy()} ${this.victory}` ;
          };
      }
    }
  
        const ironMan = new Hero({
          createdAt : new Date(),
          dimensions: {
            length: 1,
            width: 1,
            height: 2,
          },
          healthPoints: 40,
          name: `Iron Man`,
          weapons: [
            `Lasers`,
            `bombs`,
          ],
          language: `English`,
        });
  
  
        let fightNow = (fighter1, fighter2) => {
          console.log(`round 1, FIGHT!`);
          do{
            console.log(`Sauron takes a hit to the eye, his health is now ${fighter1.punch(fighter2)}`);
            console.log(`Iron Man gets punched in the Ego! his health is now ${fighter2.punch(fighter1)}`);
          }while((fighter1.healthPoints > 0 && fighter2.healthPoints >0))
    
          if (fighter2.healthPoints > fighter1.healthPoints) {
            return console.log(`${fighter2.destroy()}, ${fighter1.victory}`);
          } else {
            return console.log(`${fighter1.destroy()}, ${fighter2.victory}`);
          };
        };
    
        fightNow(sauron, ironMan);
