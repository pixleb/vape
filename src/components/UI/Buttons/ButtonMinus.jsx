import React from "react";
import classNames from "classnames";

function ButtonMinus({ className = "", size = "sm", ...props }) {
	const classes = classNames(
		"button button-minus button-minus-" + size,
		className
	);

	return (
		<button className={classes} {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12Z"
					fill="#111827"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12Z"
					fill="black"
					fillOpacity="0.2"
				/>
			</svg>
		</button>
	);
}

export default ButtonMinus;
