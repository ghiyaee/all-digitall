import express from "express";
import http from 'http';
import cors from 'cors';
import{Server} from 'socket.io'
import slider from './slider.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import seedRouter from "./routes/seedRoutes.js";
import productRouter from './routes/productRoutes.js'
import userRoutes from "./routes/userRoutes.js";
import commentRouter from './routes/commentRoutes.js'
import messageRoute from "./routes/messageRoute.js"
import addressRouter from "./routes/addressUserRoute.js";
import orderRoute from "./routes/orderRoute.js";

const app = express();
app.use(cors())
// const server = http.createServer(app)
// const io = new Server(server, {
//     cors: {
//         origin:'*'
//     }
// })
dotenv.config()
mongoose
.connect(process.env.MONGOURL)
.then(() => console.log('connect to database'))
.catch((err) => console.log(err.message))


app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }))


app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter)
app.use('/api/user', userRoutes);
app.use('/api/comment', commentRouter);
app.use('/api/message', messageRoute)
app.use('/api/address',addressRouter)
app.use('/api/order',orderRoute)
app.get('/api/slider', (req, res) => {
res.send(slider.products)   
})
// io.on('connect', (socket) => {
//     console.log('user a connected ' , socket.id);
//     socket.on('message', (data) => {
//         console.log(data);
//         socket.emit('message', data);
//     })
//     socket.on('disconnect ',()=> {
//         console.log('user disconnect', socket.id);
//     })
// })
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is run http://localhost:${port}`);
});