const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const PORT = process.env.PORT || 4444;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
    extname: 'hbs',
}),
);

app.get('/', (req, res) => {
    res.render('home', { cssFileName: 'home' });
});
app.get('/products', (req, res) => {
    res.render('products', { products, cssFileName: 'products' });
});
app.get('/product/:productId', (req, res) => {
    const product = products.find(p => p.id === req.params.productId);
    res.render('product', { product });
});
app.get('/about', (req, res) => {
    res.render('about', { cssFileName: 'about' });
});


app.listen(PORT, () => { });