import Card from "../../components/Card/Card";
import axios from "axios";
import React from "react";

import Categories from "../../components/Categories/Categories";
import CatDropdown from "../../components/Categories/CatDropdown";

function Glicerin12Extra({ cart, forceUpdate }) {
	const [loadedData, setLoadedData] = React.useState({ products: [], size: 0 });
    
    let isDesktop = window.screen.orientation.type.includes("landscape");

	React.useEffect(() => {
        // deprecates requests, if data up to date already
        if (loadedData.size) return;
		axios.get("/get_glicerin_12")
        .then(res => setLoadedData(res.data));
	});
    
    let quantity = loadedData.size,
        prod = loadedData.products;

    let cards = new Array();
    let body = new Array();

	 let lastCategory = null;
     let lastParams = {title: "&hidden", className: "", id: "", isActive: false};
    
	 prod.forEach(product => {
	 	if (product.category !== lastCategory) {
            if(!lastCategory) lastCategory = product.categoryId;
            
            let newDD = <CatDropdown 
                            className={lastParams.className} 
                            id={lastParams.id}
                            title={lastParams.title} 
                            cards={[...cards]} 
                            isActive={lastParams.isActive} />
            body.push(newDD);
            cards = [];

	 		if (product.categoryId === "2ce4d356-b209-11ee-0a80-032d001d7154")
	 		{
                let title = (
	 		        <span>SWEETS & DESSERTS</span>
	 		    );
                lastParams = {title: title, className: "_rose", id: "sec3", isActive: isDesktop};
            }
                
	 		else if (product.categoryId === "c3f08641-b0c4-11ee-0a80-0ea30001ed85")
            {
	 			let title = (
	 		        <span>FRUITS & DRINKS</span>
	 			);
                lastParams = {title: title, className: "_orange", id: "sec1", isActive: true};
            }
	 		else if (product.categoryId === "ab22539f-b5f6-11ee-0a80-05fc0027a1a3")
            {
	 			let title = (
	 		        <span>ICE EDITIONS</span>
	 			);
                lastParams = {title: title, className: "_blue", id: "sec2", isActive: isDesktop};
            }
	 	}

        let quantity = 0;
        if (Object.keys(cart.stored).includes(product.code))
            quantity = cart.stored[product.code].quantity;
         
	 	let new_card = (
	 		<Card
	 			className="taste__card"
	 			title={product.name}
	 			subtitle={product.description}
	 			price={product.price}
	 			cardSrc={product.imageURLMiniature}
	 			item={product}
	 			cart={cart}
	 			forceUpdate={forceUpdate}
	 			quantity={quantity}
	 		/>
	 	);
	 	cards.push(new_card);
	 	lastCategory = product.category;
	 });
    let newDD = <CatDropdown 
                    className={lastParams.className} 
                    id={lastParams.id}
                    title={lastParams.title} 
                    cards={[...cards]} 
                    isActive={lastParams.isActive} />
    body.push(newDD);
    cards = [];

	return (
		<>
			<h1 className="title">
				Премiкс 12 мл <span>EXTRA/SALT</span>
			</h1>
			<div className="all-goods _mob">
				<span>{quantity}</span> товарів
			</div>

			<div className="taste-wrapper">
			    <Categories />
				<section className="taste">
					<div className="taste__body">{body}</div>
				</section>
			</div>
		</>
	);
}

export default Glicerin12Extra;
