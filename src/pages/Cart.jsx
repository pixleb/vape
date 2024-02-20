import React from "react";
import CardCart from "../components/Card/CardCart";
import ButtonCheckout from "../components/UI/Buttons/ButtonCheckout";

function Cart({ setActivePage, cart, forceUpdate }) {
    //console.log('cart displayed: ', cart);
    let prod = Object.values(cart.stored);
    
    // подсчитывает количество и стоимость товаров в корзине 
    // сделан без стейтов, т.к. все равно должен пересчитываться на каждый рендер
    let sumQuantity = 0, sumPrice = 0;

    prod.forEach(product => {
        sumQuantity += product.quantity; 
        sumPrice += product.price*product.quantity;
    });
    
    let cards = new Array();
    prod.forEach(product => {
        let new_card = <CardCart 
            className = "taste__card"
            title = {product.name}
            subtitle = {product.description}
            price = {product.price}
            cardSrc = {product.imageURLMiniature}
            item = {product}
            forceUpdate = {forceUpdate}
            cart = {cart}
        />
        cards.push(new_card);
    });
    
	return (
		<div className="cart">
			<h1 className="title">Кошик</h1>
			<div className="cart__content">
				<div className="cart__items taste__body">
					{ cards }
				</div>
				{ Object.keys(cart.stored).length ? (
                <div className="cart__right">
					<div className="cart__right-totalCount">
						<span>{sumQuantity}</span> товарів
					</div>
					<div className="cart__right-sum">
						<span>{sumPrice}</span> грн
					</div>
					<ButtonCheckout onClick={() => setActivePage("checkout")}>
						Оформити замовлення
					</ButtonCheckout>
					<p className="cart__right-text">
						Вказана ціна не є остаточною. Остаточну ціну ви отримаєте від
						менеджера при підтверджені замовлення.
					</p>
				</div>
                ) : "" }
				
			</div>
		</div>
	);
}

export default Cart;
