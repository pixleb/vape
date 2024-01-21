import { useSelector } from "react-redux";

import Glicerin from "./Catalog/Glicerin";
import Glicerin12Extra from "./Catalog/Glicerin12Extra";
import Glicerin18 from "./Catalog/Glicerin18";
import Nikobuster from "./Catalog/Nikobuster";
import Others from "./Catalog/Others";
import Cart from "./Cart";
import Checkout from "./Checkout";

function Home({ catalogItems, activePage, setActivePage }) {
	// Router
	const pagesComponent = [
		<Glicerin18 />,
		<Glicerin12Extra />,
		<Glicerin />,
		<Nikobuster />,
		<Others />,
	];

	const pageIndex = useSelector(({ catalog }) => catalog.catalogIndex);

	return (
		<div className="container">
			<div className="home">
				<nav className="nav">
					{activePage === "home" ? (
						<div className="nav__wrapper">
							<ul className="nav__content">
								<li className="nav__item _main">Каталог</li>
								<li className="nav__item">{catalogItems[pageIndex]}</li>
							</ul>
							<div className="all-goods">
								<span>12</span> товарів
							</div>
						</div>
					) : (
						""
					)}
					{activePage === "cart" ? (
						<div className="nav__wrapper">
							<ul className="nav__content">
								<li className="nav__item _main">Выбор товаров</li>
								<li className="nav__item">Корзина</li>
							</ul>
							<div className="all-goods">
								<span>12</span> товарів
							</div>
						</div>
					) : (
						""
					)}

					{activePage === "checkout" ? (
						<ul className="nav__content">
							<li className="nav__item _main">Выбор товаров</li>
							<li className="nav__item">Кошик</li>
							<li className="nav__item">Оформлення товарів</li>
						</ul>
					) : (
						""
					)}
				</nav>
			</div>

			{activePage === "home" ? pagesComponent[pageIndex] : ""}
			{activePage === "cart" ? (
				<Cart activePage={activePage} setActivePage={setActivePage} />
			) : (
				""
			)}
			{activePage === "checkout" ? <Checkout /> : ""}
		</div>
	);
}

export default Home;
