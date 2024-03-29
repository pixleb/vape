import React from "react";
import classNames from "classnames";

function ButtonCheckout({ className = "", children, onClick, ...props }) {
	const classes = classNames("button button-checkout", className);

	return (
		<button className={classes} onClick={onClick} {...props} style={{"margin": "auto"}}>
			{children}
		</button>
	);
}

export default ButtonCheckout;
