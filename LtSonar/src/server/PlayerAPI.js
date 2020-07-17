/* Copyright (C) 2020. Alejandro Lopez*/

'use strict';

import Express, { response } from 'express';
import Result from '../../lib/Result';
const Router = Express.Router();

import Player from '../model/player';

let currentPlayer;

// login post function
Router.post('/login', (request , response) => {
    
    let resp = new Result();

    let value = request.body;

    // create the player with the given info
    let player = new Player(value);
    currentPlayer = player;

    resp.payload = player;
    resp.ok();

    response.send(resp.serialize());
});

export default Router;