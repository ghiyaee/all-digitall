import express from 'express';
import {
  home,
  newProduct,
  categorys,
  category,
  like,
  dislike,
  purchased,
  Edit,
  comment,
  delelte,
  slug,
  searchProduct,
  filter,
  categoryBrand,
} from '../controller/productControl.js';
const productRouter = express.Router();
productRouter.get('/', home);
productRouter.post('/newProduct', newProduct);
productRouter.post('/categorys', categorys);
productRouter.post('/category',category );
productRouter.post('/like', like);
productRouter.post('/dislike',dislike );
productRouter.post('/purchased', purchased);
productRouter.post('/Edit',Edit );
productRouter.post('/comment',comment);
productRouter.post('/del',delelte );
productRouter.get('/slug/:slug',slug );
productRouter.post('/searchProduct', searchProduct);
productRouter.get('/filter',filter);
productRouter.post('/cb', categoryBrand)
export default productRouter;

