/* Copyright (C) 2020. Alejandro Lopez*/

'use strict';

import Express, { response } from 'express';
import Result from '../../lib/Result';
const Router = Express.Router();

import Player from '../model/player';

Router.post('/login:name', (request , respose) => {
    
    let resp = new Result();

    let value = request.body.name;

    let player = new Player(value);

    resp.payload = player;
    resp.ok();

    response.send(resp.serialize());
});

export default Router;