import  express  from "express";
import data from './data.js'
import slider from './slider.js'
const app = express();


app.get('/api/slider', (req, res) => {
    res.send(slider.products)
    
})
app.get('/api/products', (req, res) => {
    res.send(data.products)
})
app.get('/api/products/slug/:slug', (req, res) => {
    const product=data.products.find(f=> f.slug === req.params.slug)
    res.send(product);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is run http://localhost:${port}`);
})