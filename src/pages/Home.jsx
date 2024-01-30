import { useSelector } from "react-redux";

import Glicerin from "./Catalog/Glicerin";
import Glicerin12Extra from "./Catalog/Glicerin12Extra";
import Glicerin18 from "./Catalog/Glicerin18";
import Nikobuster from "./Catalog/Nikobuster";
import Others from "./Catalog/Others";
import Search from "./Catalog/Search";
import Cart from "./Cart";
import Checkout from "./Checkout";

function Home({ catalogItems, activePage, setActivePage, cart }) {
	// Router
	const pagesComponent = [
		<Glicerin18 cart = {cart} />,
		<Glicerin12Extra cart = {cart} />,
		<Glicerin cart = {cart} />,
		<Nikobuster cart = {cart} />,
		<Others cart = {cart} />,
	];

	const pageIndex = useSelector(({ catalog }) => catalog.catalogIndex);

	return (
		<div className="container">
			<div className="home">
				<nav className="nav">
				    {
                        activePage.includes(':')?
                        (
                            <Search input = { activePage.split(':')[1] } />
                        ) : (
                            ""
                        )
                    }
				
					{activePage === "home" ? (
						<div className="nav__wrapper">
							<ul className="nav__content">
								<li className="nav__item _main">Каталог</li>
								<li className="nav__item">{catalogItems[pageIndex]}</li>
							</ul>
							<div className="all-goods">
								<span></span>
							</div>
						</div>
					) : (
						""
					)}
					{activePage === "cart" ? (
						<div className="nav__wrapper">
							<ul className="nav__content">
								<li className="nav__item _main">Выбор товаров</li>
								<li className="nav__item">Кошик</li>
							</ul>
							<div className="all-goods">
								<span></span>
							</div>
						</div>
					) : (
						""
					)}

					{activePage === "checkout" ? (
						<ul className="nav__content">
							<li className="nav__item _main">Выбор товаров</li>
							<li className="nav__item" onClick = { () => setActivePage('cart') }
							    style = {{'cursor': 'pointer'}}>Кошик</li>
							<li className="nav__item">Оформлення товарів</li>
						</ul>
					) : (
						""
					)}
				</nav>
			</div>

			{activePage === "home" ? pagesComponent[pageIndex] : ""}
			{activePage === "cart" ? (
				<Cart cart = {cart} activePage={activePage} setActivePage={setActivePage} />
			) : (
				""
			)}
			{activePage === "checkout" ? <Checkout cart = {cart} activePage={activePage} setActivePage={setActivePage} /> : ""}
		</div>
	);
}

export default Home;
