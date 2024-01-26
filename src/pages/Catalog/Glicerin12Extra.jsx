import Card from "../../components/Card/Card";

function getGlicerin12()
{
    let xhr = new XMLHttpRequest;
    xhr.open('GET', '/get_glicerin_12', false);
    xhr.send(null);
    //console.log(xhr.responseText, typeof xhr.responseText)
    return JSON.parse(xhr.responseText);
    
}

function Glicerin12Extra() {
    let res = getGlicerin12();
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
            item = {product}
        />
        cards.push(new_card);
    });
    
	return (
		<>
			<h1 className="title">Премикс 12 мл <span>EXTRA/SALT</span></h1>
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

export default Glicerin12Extra;
