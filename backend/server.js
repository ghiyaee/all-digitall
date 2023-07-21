import  express  from "express";
import data from './data.js'
import slider from './slider.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import seedRouter from "./routes/seedRoutes.js";
import productRouter from './routes/productRoutes.js'
import userRoutes from "./routes/userRoutes.js";
// import textRouter from './routes/textRoutes.js'
dotenv.config();
mongoose
.connect(process.env.MONGOURL)
.then(() => console.log('connect to digi'))
.catch((err) => console.log(err.message))

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter)
app.use('/api/user', userRoutes);
// app.use('/api/text', textRouter);

// app.get('/api/products', (req, res) => {
//     res.send(data.products)
// })
app.get('/api/slider', (req, res) => {
    res.send(slider.products)
    
})

app.use((err, req, res, next) => {
    res.status(500).send({msg:err.message})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is run http://localhost:${port}`);
})