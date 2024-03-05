import React from "react";
import axios from "axios";

import ImgSrc from "../assets/img/catalog/blueberry.png";
import ButtonCheckout from "../components/UI/Buttons/ButtonCheckout";

function Checkout({ setActivePage, cart, forceUpdate }) {
	let prod = Object.values(cart.stored);

	// подсчитывает количество и стоимость товаров в корзине
	// сделан без стейтов, т.к. все равно должен пересчитываться на каждый рендер
	let sumQuantity = 0,
		sumPrice = 0;
	let images = new Array();

	prod.forEach(product => {
		sumQuantity += product.quantity;
		sumPrice += product.price * product.quantity;

		let newImg = (
			<div className="checkout__images-container">
				<span className="checkout__images-count">{product.quantity}</span>
				<img
					src={product.imageURLMiniature}
					alt=""
					className="checkout__images-item"
				/>
			</div>
		);
		images.push(newImg);
	});

	let phoneRef = React.createRef(),
		nameRef = React.createRef(),
		maildataRef = React.createRef(),
		inndataRef = React.createRef(),
		commentRef = React.createRef();

    const onPhoneFocus = e => {
        if (!e.target.value)
            e.target.value = "+380";
    }
    const onPhoneChange = e => {
        let allowed = ['Backspace', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '-', '+']
        if (!allowed.includes(e.key))
            e.preventDefault(); 
    }
    
	const makeOrder = () => {
		let phone = phoneRef.current.value;
		let name = nameRef.current.value;
        let maildata = maildataRef.current.value;
        let inndata = inndataRef.current.value;
		let comment = commentRef.current.value;

        // тут конечно лучше более серьезную валидацию на regexp сделать, но об этом не просили
        if (!name.length || !phone.length || phone == "+380") 
            return alert("поля Назва компанії і телефон обов'язкові до заповнення");
        
		let products = Object.values(cart.stored);

		let data = JSON.stringify({
			products: products,
			phone: phone,
			name: name,
            maildata: maildata,
            inndata: inndata,
			comment: comment,
		});

		axios.post("/order", data, {
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
			},
		});
        
		cart.clear();
		forceUpdate();

		setActivePage("thanks");
	};

	return (
		<div className="checkout">
			<h1 className="title">Оформлення замовлення</h1>

			<div className="checkout__content">
				<div className="checkout__form">
					<label htmlFor="_company" className="checkout__label">
						Назва компанії
						<input
							ref={nameRef}
							type="text"
							id="_company"
							placeholder="Назва компанії"
							className="checkout__input _company"
							required
						/>
					</label>
					<label htmlFor="_tel" className="checkout__label">
						Телефон для зв'язку
						<input
							ref={phoneRef}
							type="tel" 
							placeholder="+380-yy-xxxxxxx"
							className="checkout__input _tel"
							onFocus = {onPhoneFocus}
							onKeyDown = {onPhoneChange}
							required
						/>
					</label>
					<label className="checkout__label">
						Дані отримувача на Новій пошті
						<input
							ref={maildataRef}
							type="tel" 
							placeholder="Телефон, П.І.Б., місто, відділення НП"
							className="checkout__input"
							required
						/>
					</label>
					<label className="checkout__label">
						Назва ФОП та ЄДРПОУ(ІПН) для рахунку
						<input
							ref={inndataRef}
							type="tel" 
							placeholder="Назва ФОП та ЄДРПОУ(ІПН) для рахунку"
							className="checkout__input"
							required
						/>
					</label>
					<label htmlFor="_tel" className="checkout__label">
						Коментар до замовлення
						<textarea
							ref={commentRef}
							name="commentar"
							id="_tel"
							className="checkout__textarea"
							placeholder="Якщо маєте певні примітки до замовлення, напишіть їх тут"
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
					<div className="checkout__images">{images}</div>
					<div className="checkout__price">
						<span>{sumPrice}</span> грн
					</div>
					<ButtonCheckout className="checkout__confirm" onClick={makeOrder}>
						Підтвердити замовлення
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
