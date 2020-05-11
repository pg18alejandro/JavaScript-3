// Corrction on ===

// Stage 2
class Fruit {
    constructor( density = 0, weight = 0 ) {
        this.cost = density;
        this.weight = weight;
    }

    calories() {
        return this.mass * this.sugar();
    }

    get mass() {
        return Math.floor( this.weight / this.cost);
    }

    sugar() {
        return (this.cost * 0.64);
    }
}


class Apple extends Fruit {
    constructor( options, params ) {

        let density = diameter * DENSITY;
        let weight = density * diameter;

        super( density, weight );
        this.diameter = diameter;
    }
}

// jQuery
class Orange extends Fruit {}

// AJAX


// Promises