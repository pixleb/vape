import Card from "../../components/Card/Card";
import axios from 'axios';

function getGlicerin18()
{
    let xhr = new XMLHttpRequest;
    xhr.open('GET', '/get_glicerin_18', false);
    xhr.send(null);
    console.log(xhr.responseText, typeof xhr.responseText)
    return JSON.parse(xhr.responseText);
    
}

function Glicerin18() {
    let res = getGlicerin18();
    let quantity = res.size, prod = res.products;
    console.log(prod)
    
    let cards = new Array();
    prod.forEach(product => {
        let new_card = <Card 
            className = 'taste__card'
            title = {product.name}
            subtitle = {product.description}
            price = {product.price}
            cardSrc = {product.imageURLMiniature}
        />
        console.log(new_card);
        cards.push(new_card);
    });
    console.log(cards);
    
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
