import classNames from "classnames";
import React, { useState } from "react";

import CardImg from "../../assets/img/catalog/blueberry.png";
import ButtonPlus from "../UI/Buttons/ButtonPlus";
import ButtonCounter from "../UI/Buttons/ButtonCounter";

function Card({ className = "", newTaste, title, subtitle, price, cardSrc }) {
	const classses = classNames("card", className);

	const [isFirst, setIsFirst] = useState(true);
	const [quantityCounter, setQuantityCounter] = useState(0);

	const handleIncrement = () => {
		addItem(false);

		setQuantityCounter(quantityCounter + 1);
	};

	const handleDecrement = () => {
		removeItem(false);

		if (quantityCounter >= 1) {
			setQuantityCounter(quantityCounter - 1);
		}

		if (quantityCounter === 1) {
			setIsFirst(true);
		}
	};

	const addItem = (first = true) => {
		if (first && isFirst) {
			// if this is the first click - show couter
			setIsFirst(false);
			setQuantityCounter(1);
		} else {
			// smth else
		}
	};
	const removeItem = (first = true) => {
		if (quantityCounter === 0) {
			setIsFirst(true);
		}
		if (first && isFirst) {
			// if this is the first click - hide couter
			setIsFirst(true);
		} else {
			// smth else
		}
	};

	return (
		<div className={classses}>
			<div className="card__content">
				<div className="card__left">
					<img src={cardSrc} alt="blueberry" className="card__img" />

					<div className="card__left-bottom">
						<h4 className="card__title">{title}</h4>
						<h5 className="card__subtitle">{subtitle}</h5>
						{newTaste ? <div className="card__new-taste">NEW</div> : ""}
					</div>
				</div>
				<div className="card__center">
					<div className="card__price">
						<span>{price}</span> грн
					</div>
					<div className="card__totalprice">
						<span>1230</span> грн
					</div>
				</div>
				<div className="card__right">
					{isFirst ? (
						<ButtonPlus size="md" onClick={addItem} />
					) : (
						<ButtonCounter
							quantity={quantityCounter}
							onClickMinusBtn={handleDecrement}
							onClickPlusBtn={handleIncrement}
							size="md"
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
