const express = require('express');
const cors = require('cors');
const axios = require('axios');

let app = express();

app.use(cors());
app.use(express.static('./build'));

app.get('/', function(req, res)
{
    res.sendFile('./build/index.html');
})

app.get('/get_glicerin_18', function(req, res)
{
    let prod = {products: [], size: 0};
    let categories = [
        '513ab57e-b209-11ee-0a80-032d001d7495',
        'ee1da28d-b5f6-11ee-0a80-14f000286c83',
        '4947ed06-b209-11ee-0a80-066b001dc47d'
    ];
    // чтобы получить несколько категорий, пришлось бы делать несколько запросов.
    // это дольше, чем получить все и перебрать на сервере
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=&limit=1000&offset=0&search=')
    .then(
        resp => 
        {
            dat = resp.data;
            dat.products.forEach(product => {
                if (categories.includes(product.categoryId)) prod.products.push(product);
            })
            prod.size = prod.products.length;
            //console.log(prod);
            return res.json(prod);
        }
    )
}
);

app.get('/get_glicerin_12', function(req, res)
{
    let prod = {products: [], size: 0};
    let categories = [
        '41e7dc97-2d65-11ee-0a80-0c8f000c18e2',
        'ab22539f-b5f6-11ee-0a80-05fc0027a1a3',
        '2ce4d356-b209-11ee-0a80-032d001d7154'
    ];
    
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=&limit=1000&offset=0&search=')
    .then(
        resp => 
        {
            dat = resp.data;
            dat.products.forEach(product => {
                if (categories.includes(product.categoryId)) prod.products.push(product);
            })
            prod.size = prod.products.length;
            //console.log(prod);
            return res.json(prod);
        }
    )
}
);

app.listen(3005, function()
{
    console.log('server started');
})
