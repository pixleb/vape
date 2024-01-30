import Card from "../../components/Card/Card";

function getSearchResults(input)
{
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `/search?input=${input}`, false);
    xhr.send(null);
    //console.log(xhr.responseText, typeof xhr.responseText)
    return JSON.parse(xhr.responseText);
}

function Search({ input, cart }) {
    let res = getSearchResults(input);
    let quantity = res.size, prod = res.products;
    console.log(res, prod)
    
    let cards = new Array();
    prod.forEach(product => {
        let new_card = <Card 
            className = 'taste__card'
            title = {product.name}
            subtitle = {product.description}
            price = {product.price}
            cardSrc = {product.imageURLMiniature}
            item = {product}
            cart = {cart}
        />
        cards.push(new_card);
    });
    
	return (
		<>
			<h1 className="title">Поиск: <span>{input}</span></h1>
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

export default Search;
