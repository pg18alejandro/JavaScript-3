// Corrction on ===

(function() {
    // OLD School ES5 stuf don't write
    function Fruit( density, weight ) {
        this.cost = density;
        this.weight = weight;

        this.mass = function() {
            return Math.floor( this.weight / this.cost);
        }
    }

    Fruit.prototype.calories = function() {
        return this.mass * this.sugar();
    }

    Fruit.prototype.sugar = function() {
        return (this.cost * 0.64);
    }

    return Fruit;
})();

var f = new Fruit();   // in the debugger .__proto__

// Stage 2 ES6+
const TYPES = {
    FRUIT: 0,
    APPLE: 1,
    ORANGE: 2
}

//  Make this a file...
export default class Fruit {
    constructor( type = FRUIT, density = 0, weight = 0 ) {
        this.cost = density;
        this.weight = weight;
    }

    static get TYPES() {
        return {
            FRUIT: 0,
            APPLE: 1,
            ORANGE: 2
        }
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
// Fruit class ends

class Apple extends Fruit {

    constructor( options, params ) {

        let density = diameter * DENSITY;
        let weight = density * diameter;

        super( Fruit.TYPES.APPLE, density, weight );
        this.diameter = diameter;
    }
}

// jQuery

function someHandler( event ) {
    // handles orange clicking
}

// No jQuery
//const $ = selector => document.querySelector( selector );
// jQuery
// $ defined as jQuery();

class Orange extends Fruit {

    constructor() {
        super( Fruit.TYPES.ORANGE );
        // additional orangie stuff

        /*
        <div id="orange-button" onclick="someHandler">Press me</div>
        */
       $("#orange-button").on('click', event => {
            this.squeeze();
       });

       $("#orange-button").click( function( event ) {
           // I have no idea in here what this is???
           // this. is lost...
           this.squeeze();   // CRASHES here, this does not have a squeeze method
       });
    }

    populate() {
        // go out to some REST API and get our defn.
        // AJAX
        return new Promise( ( resolveFn, rejectFn ) => {

            try {
                let someResponse = await $.post('/api/pickEm', { quantity: 42 });
            }
            catch {
                rejectFn("there are no more oranges left :-(");
            }

            let dataObj = someResponse => $.parseJSON( someResponse );
            // update our object
            resolveFn( someResponse )
        });
}

    squeeze() {
        // hugs?
    }
}


class App {

    constructor() {}

    updateOrangeScreen() {
        let orangeMan = new Orange();
        orangeMan.populate()
            .then( done => {
                // update the UI with the JUICE.
            })
            .catch( error => prompt( error ))
    }
}


// Promises