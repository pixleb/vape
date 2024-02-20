import Card from "../../components/Card/Card";
import axios from 'axios';
import React from "react";

function Search({ input, cart, forceUpdate }) {
    const [loadedData, setLoadedData] = React.useState({products: [], size: 0});
    
    React.useEffect(() => {
        // deprecates requests, if data up to date already
        if (loadedData.size) return;
        axios.get(`/search?input=${input}`)
        .then(res => setLoadedData(res.data));
    });
    
    let quantity = loadedData.size, prod = loadedData.products;
    
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
            forceUpdate = {forceUpdate}
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
