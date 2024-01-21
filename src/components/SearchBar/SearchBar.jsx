import classNames from "classnames";
import React from "react";

export default function SearchBar({ className }) {
	const classes = classNames("search-bar", className);

	return (
		<div className={classes}>
			<div className="search-bar__content">
				<input
					type="text"
					className="search-bar__input"
					placeholder="Шукати товари"
				/>
				<div className="search-bar__body">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="21"
						height="20"
						viewBox="0 0 21 20"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.83366 3.33329C6.07224 3.33329 3.83366 5.57187 3.83366 8.33329C3.83366 11.0947 6.07224 13.3333 8.83366 13.3333C11.5951 13.3333 13.8337 11.0947 13.8337 8.33329C13.8337 5.57187 11.5951 3.33329 8.83366 3.33329ZM2.16699 8.33329C2.16699 4.65139 5.15176 1.66663 8.83366 1.66663C12.5156 1.66663 15.5003 4.65139 15.5003 8.33329C15.5003 9.87389 14.9778 11.2924 14.1002 12.4213L18.5896 16.9107C18.915 17.2361 18.915 17.7638 18.5896 18.0892C18.2641 18.4147 17.7365 18.4147 17.4111 18.0892L12.9217 13.5998C11.7928 14.4774 10.3743 15 8.83366 15C5.15176 15 2.16699 12.0152 2.16699 8.33329Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
