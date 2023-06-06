

class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power;
        this.res = res;
    }
    attack (target){
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play( target ) {
            if( target instanceof Unit ) {
                if(this.stat == 'resilience'){
                    target.res += this.mag
                } else target.power += this.mag
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }
}


const card1 = new Unit('Red Belt Ninja', 3, 3, 4)
console.log(card1)
const card2 = new Effect('Hard Alogrithm', 2, "increase target's resilience by 3", 'resilience', 3)
console.log(card2)
card2.play(card1)
console.log(card1)
const card3 = new Unit('Black Belt Ninja', 4, 5, 4)
console.log(card3)
const card4 = new Effect('Unhandled Promise Rejection', 1, "reduce target's resilience by 2", 'resilience', -2)
console.log(card4)
card4.play(card1)
console.log(card1)
card1.attack(card3)
console.log(card1)
console.log(card3)
const card5 = new Effect('Pair Programming', 3, "increase target's power by 2", 'power', 2)






