import React from "react";
import classNames from "classnames";

function ButtonPlus({ className = "", size = "sm", ...props }) {
	const classes = classNames(
		"button button-plus button-plus-" + size,
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
					d="M12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13L6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11L11 11V6C11 5.44772 11.4477 5 12 5Z"
					fill="white"
				/>
			</svg>
		</button>
	);
}

export default ButtonPlus;
