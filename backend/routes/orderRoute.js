import experss from 'express';
import {
  home, newOrder, orderFilter,
  send, userOrder
} from '../controller/oerderControl.js';
const orderRoute = experss.Router();
orderRoute.get('/', home)
orderRoute.post('/new',newOrder);
orderRoute.post('/send',send )
orderRoute.post('/user',userOrder )
orderRoute.get('/filter',orderFilter )
export default orderRoute;
