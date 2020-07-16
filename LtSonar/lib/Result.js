/*
Copyright (C) 2020 Alejandro Lopez
*/

export default class Result {

    constructor(error = -1, errorMsg = "Unknown Error", payload = {}){

        this.error = error;
        this.errorMsg = errorMsg;
        this.payload = payload;
    }

    ok(){

        this.error = 0;
        this.errorMsg = "";
        return this;
    }

    serialize(){

        return JSON.stringify(this);
    }
}