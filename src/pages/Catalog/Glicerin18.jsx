import Card from "../../components/Card/Card";
import axios from 'axios';

function getGlicerin18()
{
    //axios.get('https://b2b.moysklad.ru/desktop-api/public/kZPpwgM9Powo/products.json?category=&category_id=&limit=1000&offset=0&search=')
    /*axios.get('/get_glicerin_18')
        .then(
            res => 
            {
                //console.log(res, res.data);
                return res.data;
            }
        );
        */
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
				/*
					<div className="taste__content">
					    
						<h2 className="taste__title _rose">SWEETS & DESSERTS</h2>
						<div className="taste__body">
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="Title"
								subtitle="Subtitle"
								price={777}
								newTaste
							/>
						</div>
					</div>
				</section>
				<section className="taste">
					<div className="taste__content">
						<h2 className="taste__title _orange">FRUITS & DRINKS</h2>
						<div className="taste__body">
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
						</div>
					</div>
				</section>
				<section className="taste">
					<div className="taste__content">
						<h2 className="taste__title _blue">ICE EDITIONS</h2>
						<div className="taste__body">
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
							<Card
								className="taste__card"
								title="BLUEBERRY JAM"
								subtitle="Чорничний джем з маслом і тостом"
								price={100}
							/>
						</div>
					</div>
					*/
				</section>
			</div>
		</>
	);
}

export default Glicerin18;
