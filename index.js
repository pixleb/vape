const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'build/')));

app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('/search', function(req, res) 
{
    //console.log('got search request');
    
    let input = req.query.input;
    
    axios.get(`https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=&limit=1000&offset=0&search=${input}`)
    .then(
        resp => 
        {   
            //console.log('search request response: {\n', resp.data.products[0], '\n...');
            return res.json(resp.data);
        }
    )
});

app.get('/get_glicerin_18', function(req, res)
{
    //console.log('got glicerin 18 request');
    
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
            //console.log(resp.data);
            dat.products.forEach(product => {
                if (categories.includes(product.categoryId)) 
                    prod.products.push(product);
            })
            prod.size = prod.products.length;
            //console.log('glicerin 18 response: {\n', prod.products[0], '\n...');
            
            return res.json(prod);
        }
    )
}
);

app.get('/get_glicerin_12', function(req, res)
{
    //console.log('got glicerin 12 request');
    
    let prod = {products: [], size: 0};
    let categories = [
        'ab22539f-b5f6-11ee-0a80-05fc0027a1a3', // ice editions
        '2ce4d356-b209-11ee-0a80-032d001d7154', // sweets and desserts
        'c3f08641-b0c4-11ee-0a80-0ea30001ed85' // fruits and drinks
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
            //console.log('glicerin 12 response: {\n', prod.products[0], '\n...');
            //console.log(prod);
            return res.json(prod);
        }
    )
}
);

app.get('/get_other', function(req, res)
{
    //console.log('got other request');
    
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=54a1e6db-2d5a-11ee-0a80-0d500012bca3&limit=1000&offset=0&search=')
    .then(
        resp => 
        {
            //console.log('other response: {\n', prod.products[0], '\n...');
            return res.json(resp.data);
        }
    )
}
);

app.get('/get_nicobooster', function(req, res)
{
    //console.log('got nicobooster request');
    
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=4a94da25-2d5a-11ee-0a80-09140012defa&limit=1000&offset=0&search=')
    .then(
        resp => 
        {
            //console.log('nicobooster response: {\n', prod.products[0], '\n...');
            return res.json(resp.data);
        }
    )
}
);

/* misc function */ 
sortGlycerine = (a, b) => Number(b.code) - Number(a.code);

app.get('/get_glycerine', function(req, res)
{
    //console.log('got glycerine request');
    
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=450502d2-2d5a-11ee-0a80-00790012aadd&limit=1000&offset=0&search=')
    .then(
        resp => 
        {
            //console.log('glycerine response:', resp.data.products);
            resp.data.products.sort(sortGlycerine);
            return res.json(resp.data);
        }
    )
}
);


/* misc function */ 
sortByCode = (a, b) => {
    let glycerineCodes = ['20070', '20071', '20072'];
    if (glycerineCodes.includes(a.code) && glycerineCodes.includes(b.code))
        return sortGlycerine(a, b);
    return Number(a.code) - Number(b.code);
}

app.post('/order', function(req, res)
{
    let prod = req.body;
    
    prod.products.sort(sortByCode);
    
//    console.log(prod);
//    return;
    
    try
    {
        axios.post('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/create-order', prod)
        .then(
            resp => console.log('order request made, status: ', resp.status)
        )
        res.status(200);
        return res.send('order request made, status 200');
    } catch {
        res.status(500);
        return res.send('order failed! status 500');
    }     
});

app.listen(3005, function()
{
    console.log('server started on localhost:3005');
})
