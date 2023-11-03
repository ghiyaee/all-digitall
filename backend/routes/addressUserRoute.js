import express from 'express';
import {
  address,
  addressNew,
  edit,
  checkAddress,
} from '../controller/addressControl.js';
const addressRouter = express.Router();
addressRouter.post('/', address);
addressRouter.post('/addressNew', addressNew);
addressRouter.post('/edit', edit);
addressRouter.post('/checkAddress', checkAddress);
export default addressRouter;
