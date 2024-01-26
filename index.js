const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./build'));

app.get('/', function(req, res)
{
    res.sendFile('./build/index.html');
});

app.get('/search', function(req, res) 
{
    let input = req.query.input;
    
    axios.get(`https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=&limit=1000&offset=0&search=${input}`)
    .then(
        resp => 
        {   
            return res.json(resp.data);
        }
    )
});

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
            //console.log(resp.data);
            dat.products.forEach(product => {
                if (categories.includes(product.categoryId)) 
                    prod.products.push(product);
            })
            prod.size = prod.products.length;
            
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

app.get('/get_other', function(req, res)
{
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=54a1e6db-2d5a-11ee-0a80-0d500012bca3&limit=1000&offset=0&search=')
    .then(
        resp => 
        {
            return res.json(resp.data);
        }
    )
}
);

app.get('/get_nicobooster', function(req, res)
{
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=4a94da25-2d5a-11ee-0a80-09140012defa&limit=1000&offset=0&search=')
    .then(
        resp => 
        {
            return res.json(resp.data);
        }
    )
}
);

app.get('/get_glycerine', function(req, res)
{
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=450502d2-2d5a-11ee-0a80-00790012aadd&limit=1000&offset=0&search=')
    .then(
        resp => 
        {
            return res.json(resp.data);
        }
    )
}
);

app.post('/order', function(req, res)
{
    let prod = req.body;
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
    console.log('server started');
})
