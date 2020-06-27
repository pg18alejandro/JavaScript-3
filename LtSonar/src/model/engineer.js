/* Copyright (C) 2020 Alejandro Lopez, All Rights Reserved */
'user strict';

export default class Engineer {

    constructor() {
        this.symbolGroup = []
    }

    addToGroup(symbolData) {
        console.log(symbolData)
        if(this.symbolGroup.length >= 24) return;
        this.symbolGroup.push(new Symbol(symbolData.pos, symbolData.dir, symbolData.circuit))
    }

    crossSymbol(symbolData) {
        this.symbolGroup.forEach(element => {
            if(element.dir == symbolData.dir && element.pos == symbolData.pos && element.circuit == symbolData.circuit)
            {
                element.crossed = symbolData.cross
            }
        });

        this.checkSelfRepair()
    }

    checkSelfRepair()
    {

    }

    serialize() {

    }

    deserialize() {

    }
}

class Symbol {
    constructor(pos, dir, circuit) {
        this.pos = pos
        this.dir = dir
        this.circuit = circuit
        this.crossed = false
    }
}