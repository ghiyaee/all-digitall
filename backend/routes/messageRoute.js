import express from 'express';
import { home, allMessage, editMessage, add } from '../controller/messageControl.js';
const messageRoute = express.Router();
messageRoute.post('/', home);
messageRoute.get('/all', allMessage);
messageRoute.post('/add', add);
messageRoute.post('/edit', editMessage);
export default messageRoute;
