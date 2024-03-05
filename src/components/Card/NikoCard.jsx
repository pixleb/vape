import classNames from "classnames";
import React, { useState } from "react";

import ButtonPlus from "../UI/Buttons/ButtonPlus";
import ButtonCounter from "../UI/Buttons/NikoCounter";

function Card({ className = "", newTaste, title, subtitle, price, cardSrc, item, cart, forceUpdate, quantity = 0 }) {
    //debug
    //console.log('item passed into card: ', item);
    
	const classes = classNames("card", className);

	const [isFirst, setIsFirst] = useState(!(Boolean(quantity)));
	const [quantityCounter, setQuantityCounter] = useState(quantity);

	const handleIncrement = () => {
		addItem(false);
        if (quantityCounter < item.stock-4)
            setQuantityCounter(quantityCounter + 5);
	};

	const handleDecrement = () => {
		removeItem(false);

		if (quantityCounter >= 5) {
			setQuantityCounter(quantityCounter - 5);
		}

		if (quantityCounter === 5) {
			setIsFirst(true);
		}
	};
    const handleInput = quantity => {
        setQuantityCounter(quantity);
        forceUpdate();
    }
    
    const handleInputBlur = quantity => {
        setIsFirst(!quantity);
        cart.set(item, quantity);
        handleInput(quantity);
    }

	const addItem = (first = true) => {
		if (first && isFirst) {
			// if this is the first click - show counter
			setIsFirst(false);
			setQuantityCounter(5);
		} else {
			// smth else
		}
        // explicit
        cart.add(item, 5);
        forceUpdate();
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
        // explicit
        cart.rem(item, 5);
        forceUpdate();
	};

	return (
		<div className={classes}>
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
					{ quantityCounter ?
					<div className="card__totalprice">
						<span> {quantityCounter * price} </span> грн
					</div> :  "" }
				</div>
				<div className="card__right">
					{isFirst ? (
						<ButtonPlus size="md" onClick={addItem} />
					) : (
						<ButtonCounter
							quantity={quantityCounter}
							onClickMinusBtn={handleDecrement}
							onClickPlusBtn={handleIncrement}
							quantityHandler={handleInput}
							inputBlurHandler={handleInputBlur}
							minlimit={0}
							maxlimit={item.stock - (item.stock % 5)}
							size="md"
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
