import express from 'express';
import {
  delelte, edit, message,
  signUp, signin, users
} from '../controller/userControl.js';
const userRoutes = express.Router();
userRoutes.get('/users', users);
userRoutes.post('/message',message )
userRoutes.post('/del',delelte );
userRoutes.post('/edit',edit );
userRoutes.post('/signin',signin );
userRoutes.post('/signUp', signUp);
export default userRoutes;
