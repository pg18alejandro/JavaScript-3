// copyright (C) 2020 Scott Henshaw
'use strict';

// Variables
var a = 4;  // function scope
let b = 2;  // block scope
const c = 42; // immutable
const d = "hello";

// Scope - how far can I see this.

// data structures
const myList = [];
const listToo = new Array();

myList.push( a );
myList[ myList.length ] = b;
listToo.splice( 4, 2 );  // array methods

let listThree = [];
for (let i = 0; i < 10; i++)
    listThree[i] = [];

lstThree[4][3] = d;

// operators:   + - * / % && || !
// Others in Math library

const UNKNOWN = -1;
const ALIVE = 1;
const DEAD = 0;

const STATE = {
    UNKNOWN: -1,
    ALIVE: 1,
    DEAD: 0,
}

const playerState = STATE.ALIVE;

let o = {};  // class o extends Object {}
o.attr1 = "hello";
o.attr2 = "world";
o.attr3 = 42;

let o2 = {
    attr1: "hello",
    attr2: "world",
    attr3: 42,
}

let same = (o == o2); // true
same = (o === o3);    // false
let o3 = o;

same = (o === o3);  // true
if (o3 === undefined) {}


if (condition) {

}
else {

}

switch (condition) {

    case 1:
        // do something
        break;

    default:
        break;
}

condition = false;
while (condition) {

    if (done)
        break;          // BAD Programmer

    if (someOtherCondition)
        condition = true;
}

for (let i = 0; i < 10; i++) {

    // do something to data
    if (condition)
        break;          // BAD Programmer !!!
}

const condition = (something == anotherThing ? valueOne : valueTwo);

condition = valueTwo;
if (something == anotherThing)
    condition = valueOne;

// initializers on method/function params
function MyThingToDo( param1 = true, options = {}) {

    const value = 5;

    // do something with param1
    return value;
}

const funcTwo = function( p1, p2 ) {}

const funcThree = ( p1, p2 ) => {}


// ES5 Old JAvaScript - icky
var Fruit = (function() {

    function Fruit( p1, p2 ) {

        this.seeds = 0;

        return this;
    }

    Fruit.prototype.doIt = function( p1, p2 ) {

        // do work here  -- but don't do this ever...
    }

    return Fruit;
})()



// Objects
const objectOne = {
    doIt: function( p1, p2 ) {

    },
    buildIt: function( name ) {
        return this
    }
}

class Fruit {

    constructor( p1, p2 ) {
        this.seedCount = p1;
    }

    populate() {

        $.post('/api/getFruit')
            .then( fruitInfoString => {

                const fruitInfo = $.parseJSON( fruitInfoString );
                this.seedCount = fruitInfo.seeds;
            });
    }

    doIt( p1, p2 ) {

    }

    buildIt( name ) {

    }
}

const f = new Fruit();

class Orange extends Fruit {

    constructor( seeds = 30 ) {
        super( seeds );

    }

}


let o = new Orange();


// Fat arrows - like a macro
( params ) => {
    // code to do stuff
}


// array methods with callbacks
let newList = myList.filter( (item, index) => { if (index % 2) return item; });

let newList2 = newList.map( item => item.seeds );

let newList3 = newList2.reduce( ( prev, current ) => this.seeds += current );

