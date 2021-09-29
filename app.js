const express = require('express');
const app = express();

app.get('/', (req, res) => { });
app.get('/products', (req, res) => { });
app.get('/about', (req, res) => { });


app.listen(4444, () => { });