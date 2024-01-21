import classNames from "classnames";
import React, { useState } from "react";

import CardImg from "../../assets/img/catalog/blueberry.png";
import ButtonCounter from "../UI/Buttons/ButtonCounter";

function CardCart({ className = "", newTaste, title, subtitle, price }) {
	const classes = classNames("card", className);

	const [quantityCounter, setQuantityCounter] = useState(1);

	const handleIncrement = () => {
		setQuantityCounter(quantityCounter + 1);
	};

	const handleDecrement = () => {
		if (quantityCounter > 1) {
			setQuantityCounter(quantityCounter - 1);
		}
	};

	return (
		<div className={classes}>
			<div className="card__content card__content-cart">
				<div className="card__left">
					<img src={CardImg} alt="blueberry" className="card__img" />

					<div className="card__left-bottom">
						<h4 className="card__title">{title}</h4>
						<h5 className="card__subtitle">{subtitle}</h5>
						{newTaste ? <div className="card__new-taste">NEW</div> : ""}
					</div>
				</div>
				<div className="card__right card__right-cart">
					<ButtonCounter
						quantity={quantityCounter}
						onClickMinusBtn={handleDecrement}
						onClickPlusBtn={handleIncrement}
						size="md"
					/>
				</div>
				<div className="card__center card__center-cart">
					<div className="card__price">
						<span>{price}</span> грн
					</div>
					<div className="card__totalprice">
						<span>1230</span> грн
					</div>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					className="card__cart-remove"
				>
					<path
						d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
						stroke="#6B7280"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
}

export default CardCart;
