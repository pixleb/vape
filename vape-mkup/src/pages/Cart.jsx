import React from "react";
import CardCart from "../components/Card/CardCart";
import ButtonCheckout from "../components/UI/Buttons/ButtonCheckout";

function Cart({ setActivePage }) {
	return (
		<div className="cart">
			<h1 className="title">Кошик</h1>
			<div className="cart__content">
				<div className="cart__items taste__body">
					<CardCart
						className="cart__card taste__card"
						title="BLUEBERRY JAM"
						subtitle="Чорничний джем з маслом і тостом"
						price={100}
					/>
					<CardCart
						className="cart__card taste__card"
						title="BLUEBERRY JAM"
						subtitle="Чорничний джем з маслом і тостом"
						price={100}
					/>
					<CardCart
						className="cart__card taste__card"
						title="BLUEBERRY JAM"
						subtitle="Чорничний джем з маслом і тостом"
						price={100}
					/>
				</div>
				<div className="cart__right">
					<div className="cart__right-totalCount">
						<span>12</span> товарів
					</div>
					<div className="cart__right-sum">
						<span>2 450</span> грн
					</div>
					<ButtonCheckout onClick={() => setActivePage("checkout")}>
						Оформити замовлення
					</ButtonCheckout>
					<p className="cart__right-text">
						Вказана ціна не є остаточною. Остаточну ціну ви отримаєте від
						менеджера при підтверджені замовлення.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Cart;
