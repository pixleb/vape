import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCatalog } from "../../../redux/actions/catalog";
import classNames from "classnames";

function Catalog({ items, setActivePage, activePage, className }) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeType, setActiveType] = useState(0);

	const classes = classNames("catalog", className);

	const dispatch = useDispatch();

	const tooggleCatalog = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = index => {
		setActiveType(index);
		dispatch(setCatalog(index));
		setActivePage("home");
	};

	useEffect(() => {
		const func = e => {
			const target = e.target;

			if (!target.closest(".catalog")) {
				setIsOpen(false);
			}
		};
		const event = document.addEventListener("click", func);

		return () => {
			document.removeEventListener(event, func);
		};
	}, []);

	return (
		<div className={classes}>
			<div className="catalog__content">
				<button
					className={
						isOpen ? "catalog__button button _active" : "catalog__button button"
					}
					onClick={tooggleCatalog}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path
							d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
							stroke="#111827"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
							stroke="black"
							strokeOpacity="0.2"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span>Каталог</span>
				</button>
				<div
					onClick={() => setIsOpen(false)}
					className={isOpen ? "catalog__body" : "catalog__body _hide"}
				>
					<ul className="catalog__list">
					    <li
				            className = "catalog__item"
				            onClick={() => setActivePage("catalog")}
				        >
				            <a href="#" className="catalog__link">
				                Всі товари
				            </a>
				        </li>
						{items.map((item, index) => {
							return (
								<li
									comment={ "" /*className={
										activeType === index
											? "catalog__item _active"
											: "catalog__item"
									}*/}
									className = "catalog__item"
									onClick={() => handleClick(index)}
									key={item}
								>
									<a href="#" className="catalog__link">
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Catalog;
