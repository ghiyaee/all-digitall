import express from 'express';
import {
  allComments,
  like,
  dislike,
  search,
  user,
  deleted,
  newComment,
  confirmations,
} from '../controller/commetcontrol.js';
const commentRouter = express.Router();
commentRouter.get('/allComments', allComments);
commentRouter.post('/like', like);
commentRouter.post('/dislike', dislike);
commentRouter.post('/search',search );
commentRouter.post('/user', user);
commentRouter.post('/del',deleted);
commentRouter.post('/newComment',newComment);
commentRouter.post('/confirmation', confirmations);
export default commentRouter;
