import React from "react";
import ImgSrc from "../assets/img/catalog/blueberry.png";
import ButtonCheckout from "../components/UI/Buttons/ButtonCheckout";

function Checkout() {
	return (
		<div className="checkout">
			<h1 className="title">Оформлення заказу</h1>

			<div className="checkout__content">
				<form action="#" className="checkout__form">
					<label htmlFor="_company" className="checkout__label">
						Ім'я або назва компанії
						<input
							type="text"
							id="_company"
							placeholder="Ім'я або назва компанії"
							className="checkout__input _company"
						/>
					</label>
					<label htmlFor="_tel" className="checkout__label">
						Телефон для зв'язку
						<input
							type="text"
							placeholder="Телефон для зв'язку"
							className="checkout__input _tel"
						/>
					</label>
					<label htmlFor="_tel" className="checkout__label">
						Коментар до замовлення
						<textarea
							name="commentar"
							id="_tel"
							className="checkout__textarea"
							placeholder="Наприклад, адреса доставки"
						></textarea>
					</label>
				</form>
				<div className="checkout__body">
					<div className="checkout__body-header">
						<h2 className="checkout__body-title">Ваше замовлення</h2>
						<h2 className="checkout__body-subtitle">
							<span>12</span> товарів
						</h2>
					</div>
					<div className="checkout__images">
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
						<img
							src={ImgSrc}
							alt="blueberry"
							className="checkout__images-item"
						/>
					</div>
					<div className="checkout__price">
						<span>2 450</span> грн
					</div>
					<ButtonCheckout className="checkout__confirm">
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
