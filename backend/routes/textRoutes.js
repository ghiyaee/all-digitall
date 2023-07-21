// import express from 'express';
// import Text from '../models/textModel.js';
// const textRouter = express.Router();

// textRouter.get('/', async (req, res) => {
//   const text = await Text.find();
//   res.send(text);
// });

// textRouter.post('/newText', async (req, res) => {
//   const text = new Text({
//     text: req.body.text,
//   });
//     await text.save();
//   const View = await Text.find();
//   res.send(View);
// });

// export default textRouter;
