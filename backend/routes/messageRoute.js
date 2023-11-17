import express from 'express';
import { home, allMessage, editMessage } from '../controller/messageControl.js';
const messageRoute = express.Router();
messageRoute.post('/', home);
messageRoute.get('/all', allMessage);
messageRoute.post('/edit', editMessage);
export default messageRoute;
