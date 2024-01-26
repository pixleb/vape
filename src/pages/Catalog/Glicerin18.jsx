import Card from "../../components/Card/Card";
import axios from 'axios';

function getGlicerin18()
{
    let xhr = new XMLHttpRequest;
    xhr.open('GET', '/get_glicerin_18', false);
    xhr.send(null);
    //console.log(xhr.responseText, typeof xhr.responseText)
    return JSON.parse(xhr.responseText);
    
}

function Glicerin18() {
    let res = getGlicerin18();
    let quantity = res.size, prod = res.products;
    console.log(prod)
    
    let cards = new Array();
    let lastCategory = new String();
    prod.forEach(product => {
        if(product.category !== lastCategory)
        {
            let title;
            
            if (product.categoryId === '4947ed06-b209-11ee-0a80-066b001dc47d')
                title = <h2 className="taste__title _rose">SWEETS & DESSERTS</h2>;
            else if (product.categoryId === '513ab57e-b209-11ee-0a80-032d001d7495')
                title = <h2 className="taste__title _orange">FRUITS & DRINKS</h2>;
            else if (product.categoryId === 'ee1da28d-b5f6-11ee-0a80-14f000286c83')
                title = <h2 className="taste__title _blue">ICE EDITIONS</h2>;
                    
            cards.push(title);
        }
        
        let new_card = <Card 
            className = 'taste__card'
            title = {product.name}
            subtitle = {product.description}
            price = {product.price}
            cardSrc = {product.imageURLMiniature}
            item = {product}
        />
        cards.push(new_card);
        lastCategory = product.category;
    });
    
	return (
		<>
			<h1 className="title">Премикс 18 мл</h1>
			<div className="all-goods _mob">
				<span>{quantity}</span> товарів
			</div>

			<div className="taste-wrapper">
				<section className="taste">
				    <div className = 'taste__body'>
                        
				        { cards }
				        
				    </div>
				</section>
			</div>
		</>
	);
}

export default Glicerin18;
