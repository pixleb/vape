import Card from "../../components/Card/NikoCard";
import axios from 'axios';
import React from "react";

function Nikobuster({ cart, forceUpdate }) {
    const [loadedData, setLoadedData] = React.useState({products: [], size: 0});
    
    React.useEffect(() => {
        // deprecates requests, if data up to date already
        if (loadedData.size) return;
        axios.get('/get_nicobooster')
        .then(res => setLoadedData(res.data));
    });
    
    // aromas
    let categories_18 = [
        '513ab57e-b209-11ee-0a80-032d001d7495',
        'ee1da28d-b5f6-11ee-0a80-14f000286c83',
        '4947ed06-b209-11ee-0a80-066b001dc47d'
    ];
    
    let categories_12 = [
        'ab22539f-b5f6-11ee-0a80-05fc0027a1a3', // ice editions
        '2ce4d356-b209-11ee-0a80-032d001d7154', // sweets and desserts
        'c3f08641-b0c4-11ee-0a80-0ea30001ed85' // fruits and drinks
    ];
    
    let got12ml = 0, got18ml = 0;
    
    Object.values(cart.stored).forEach(product => {
        if (categories_18.includes(product.categoryId)) got18ml += product.quantity;
        else if (categories_12.includes(product.categoryId)) got12ml += product.quantity;
    });
    
    // cards
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
			<h1 className="title">Нiкобустери</h1>
			<div className="all-goods _mob">
				<span>{quantity}</span> товарів
			</div>
        
            <br/>
        
            <div style = {{"color": "darkred"}}>
                Кількість нікобустерів повинна бути кратною 5.  <br/>
                На одній пластині п'ять нікобустерів. <br/>
                Якщо буде обрана не кратна п’яти кількість, <br/>
                менеджер округлить її до кратної 5.
            </div>
        
            <div style = {{"padding": "1rem", "display": "flex"}}>
                <p className = "aroma__title">
                    Вже додано: 
                </p>
                
                <div className = "aroma__container">
                    <p className = "aroma__title">
                        Ароматизатори 18 мл <span style = {{"border-bottom": "1px solid gray"}}>{got18ml}</span> шт, 
                    </p>
                    <p className = "aroma__title">
                        Ароматизатори 12 мл <span style = {{"border-bottom": "1px solid gray"}}>{got12ml}</span> шт.
                    </p>   
                </div>
                            
            </div>
        
            <hr/> <br/>

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
