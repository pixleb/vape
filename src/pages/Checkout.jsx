import React from "react";
import ImgSrc from "../assets/img/catalog/blueberry.png";
import ButtonCheckout from "../components/UI/Buttons/ButtonCheckout";

import cart from "../cart/cart.js";

function Checkout() {
    let prod = Object.values(cart.stored);
    
    // подсчитывает количество и стоимость товаров в корзине 
    // сделан без стейтов, т.к. все равно должен пересчитываться на каждый рендер
    let sumQuantity = 0, sumPrice = 0;
    let images = new Array();

    prod.forEach(product => {
        sumQuantity += product.quantity; 
        sumPrice += product.price*product.quantity;
        
        let newImg = <img
				        src={product.imageURLMiniature}
				        alt=""
				        className="checkout__images-item"
				        />
        images.push(newImg);
    });
    
    let phoneRef = React.createRef(), nameRef = React.createRef(), commentRef = React.createRef();
    
    const makeOrder = () => {
        let phone = phoneRef.current.value;
        let name = nameRef.current.value;
        let comment = commentRef.current.value;
        
        let products = Object.values(cart.stored);
        
        let data = JSON.stringify(
            { 
                "products": products, 
                "phone": phone, 
                "name": name, 
                "comment": comment 
            }
        );

        let xmlhttp = new XMLHttpRequest();
        
        xmlhttp.open("POST", '/order');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(data);
    }
    
	return (
		<div className="checkout">
			<h1 className="title">Оформлення заказу</h1>

			<div className="checkout__content">
				<div className="checkout__form">
					<label htmlFor="_company" className="checkout__label">
						Ім'я або назва компанії
						<input
						    ref = {nameRef}
							type="text"
							id="_company"
							placeholder="Ім'я або назва компанії"
							className="checkout__input _company"
						/>
					</label>
					<label htmlFor="_tel" className="checkout__label">
						Телефон для зв'язку
						<input
						    ref = {phoneRef}
							type="text"
							placeholder="Телефон для зв'язку"
							className="checkout__input _tel"
						/>
					</label>
					<label htmlFor="_tel" className="checkout__label">
						Коментар до замовлення
						<textarea
						    ref = {commentRef}
							name="commentar"
							id="_tel"
							className="checkout__textarea"
							placeholder="Наприклад, адреса доставки"
						></textarea>
					</label>
				</div>
				<div className="checkout__body">
					<div className="checkout__body-header">
						<h2 className="checkout__body-title">Ваше замовлення</h2>
						<h2 className="checkout__body-subtitle">
							<span>{sumQuantity}</span> товарів
						</h2>
					</div>
					<div className="checkout__images">
						
                        { images }
                        
					</div>
					<div className="checkout__price">
						<span>{sumPrice}</span> грн
					</div>
					<ButtonCheckout className="checkout__confirm" onClick = {makeOrder}>
						Підтвердити заказ
					</ButtonCheckout>
					<p className="checkout__confirm-text">
						Натискаючи кнопку «Підтвердити замовлення», я підтверджую, що
						досяг(ла) 18 років
					</p>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
