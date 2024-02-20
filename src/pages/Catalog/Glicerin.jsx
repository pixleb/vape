import Card from "../../components/Card/Card";
import axios from 'axios';
import React from "react";

function Glicerin({ cart, forceUpdate }) {
    const [loadedData, setLoadedData] = React.useState({products: [], size: 0});
    
    React.useEffect(() => {
        // deprecates requests, if data up to date already
        if (loadedData.size) return;
        axios.get('/get_glycerine')
        .then(res => setLoadedData(res.data));
    });
    
    let quantity = loadedData.size, prod = loadedData.products;
    
    let cards = new Array();
    prod.forEach(product => {
        
        let quantity = 0;
        if (Object.keys(cart.stored).includes(product.code))
            quantity = cart.stored[product.code].quantity;
        
        let new_card = <Card 
            className = 'taste__card'
            title = {product.name}
            subtitle = {product.description}
            price = {product.price}
            cardSrc = {product.imageURLMiniature}
            item = {product}
            cart = {cart}
            forceUpdate = {forceUpdate}
            quantity={quantity}
        />
        cards.push(new_card);
    });
    
	return (
		<>
			<h1 className="title">Глiцерин</h1>
			<div className="all-goods _mob">
				<span>{quantity}</span> товарів
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

export default Glicerin;
