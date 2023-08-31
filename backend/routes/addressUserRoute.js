import express from 'express';
import Address from '../models/addressUsersModel.js';
import { ObjectId } from 'mongodb';
const addressRouter = express.Router();
addressRouter.post('/', async (req, res) => {
  console.log(req.body);
  const address = await Address.findOne({
    user_id: new ObjectId(req.body.userinfo[0]._id),
  });
  // const address = await Address.findOneAndUpdate({ user_id:new ObjectId( req.body.userinfo[0]._id), isAddress: false }, { isAddress: true });
  res.send(address);
  console.log(address);
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
  });
  await address.save();
  res.send(address);
});
export default addressRouter;

addressRouter.post('/edit', async (req, res) => {
  const address = await Address.findOneAndUpdate({
    user_id: new ObjectId(req.body.userinfo[0]._id),
  });
  address.province = req.body.province;
  address.city = req.body.city;
  address.street = req.body.street;
  address.postCode = req.body.postCode;
  address.mobile = req.body.mobile;
  address.tell = req.body.tell;
  await address.save();
});

addressRouter.post('/checkAddress', async (req, res) => {
  const address = await Address.findOne({ user_id: req.body.userinfo[0]._id })
  console.log(address);
  res.send(address)
});