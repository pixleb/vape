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
    let prod;
    axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=&limit=1000&offset=0&search=')
    .then(
        result => 
        {
            prod = result.data;
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
