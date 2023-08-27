import express from 'express';
import Address from '../models/addressUsersModel.js';
const addressRouter = express.Router();
addressRouter.post('/', async (req, res) => {
  const address = await Address.find({ user_id: req.body.userinfo[0]._id });
  res.send(address);
});

addressRouter.post('/addressNew', async (req, res) => {
  const address = new Address({
    province: req.body.province,
    city: req.body.city,
    street: req.body.street,
    postCode: req.body.postCode,
    mobile: req.body.mobile,
    tell: req.body.tell,
    user_id: req.body.userinfo[0]._id,
    isAddress:true
  });
  await address.save();
});
export default addressRouter;

// addressRouter.post('/edit', async (req, res) => {
//   const address = await Address.findOneAndUpdate(
//     { user_id: req.body.userinfo[0]._id},
//     {
//       province: req.body.province,
//       city: req.body.city,
//       street: req.body.street,
//       postCode: req.body.postCode,
//       mobile: req.body.mobil,
//       tell: req.body.tell,
//     },
//     {new:true}
//   );
//   console.log(address);
// });
