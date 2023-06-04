// add a method: sayName() - This should log that Ninja's name to the console

// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

// add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja {
    constructor(name, health=90, speed=3, strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(`Name: ${this.name}`)
    }
    showStats() {
        if ('wisdom' in this){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}, Wisdom: ${this.wisdom}`)
        } else console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }
    drinkSake() {
        this.health += 10
        console.log(`${this.name} drank sake health is now ${this.health}`)
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom
    }

    speakWisdom() {
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


