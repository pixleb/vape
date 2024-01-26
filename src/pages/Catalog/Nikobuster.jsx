import Card from "../../components/Card/Card";

function getNicobooster()
{
    let xhr = new XMLHttpRequest;
    xhr.open('GET', '/get_nicobooster', false);
    xhr.send(null);
    //console.log(xhr.responseText, typeof xhr.responseText)
    return JSON.parse(xhr.responseText);
    
}

function Nikobuster() {
    let res = getNicobooster();
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
			<h1 className="title">Нiкобустери</h1>
			<div className="all-goods _mob">
				<span>12</span> товарів
			</div>

			<section className="taste">
				<div className="taste__content">
					<div className="taste__body">
						
                        { cards }
                        
					</div>
				</div>
			</section>
		</>
	);
}

export default Nikobuster;
