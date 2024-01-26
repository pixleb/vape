import React, { useState } from "react";
import classNames from "classnames";
import ButtonMinus from "./ButtonMinus";
import ButtonPlus from "./ButtonPlus";

function ButtonCounter({
	className = "",
	size = "sm",
	onClickCounter,
	onClickMinusBtn,
	onClickPlusBtn,
	quantity,
	...props
}) {
	const classes = classNames("counter counter-" + size, className);

	// Написать потом логику проброса стейта с родительского компонента сюда

	return (
		<div className={classes} onClick={onClickCounter}>
			<div className="counter__content">
				<ButtonMinus
					onClick={onClickMinusBtn}
					className={size === "md" ? "button-minus-md" : "button-minus-sm"}
				/>
				<div className="counter__body">{quantity}</div>
				<ButtonPlus
					onClick={onClickPlusBtn}
					className={size === "md" ? "button-plus-md" : "button-plus-sm"}
				/>
			</div>
		</div>
	);
}

export default ButtonCounter;
