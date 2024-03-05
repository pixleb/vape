import { useSelector } from "react-redux";

import Catalog from "./Catalog/Catalog";
import Glicerin from "./Catalog/Glicerin";
import Glicerin12Extra from "./Catalog/Glicerin12Extra";
import Glicerin18 from "./Catalog/Glicerin18";
import Nikobuster from "./Catalog/Nikobuster";
import Others from "./Catalog/Others";
import Search from "./Catalog/Search";

import Cart from "./Cart";
import Checkout from "./Checkout";
import Thanks from './Thanks'

import ButtonScrollTop from "../components/UI/Buttons/ButtonScrollTop"

function Home({ catalogItems, activePage, setActivePage, forceUpdate, cart }) {
	// Router
	const pagesComponent = [
		<Glicerin18 cart = {cart} forceUpdate = {forceUpdate} />,
		<Glicerin12Extra cart = {cart} forceUpdate = {forceUpdate} />,
		<Glicerin cart = {cart} forceUpdate = {forceUpdate} />,
		<Nikobuster cart = {cart} forceUpdate = {forceUpdate} />,
		<Others cart = {cart} forceUpdate = {forceUpdate} />,
	];

	const pageIndex = useSelector(({ catalog }) => catalog.catalogIndex);

	return (
        
		<div className="container" style={activePage === "thanks" ? {"margin-top":"0px"} : {"": ""}}>
			<div className="home" style={activePage === "thanks" ? {"display": "none"} : {}}>
				<nav className="nav">
				    
				
				    { activePage === "catalog" ? (
                        <div className="nav__wrapper">
							<ul className="nav__content">
								<li className="nav__item _main">Каталог</li>
							</ul>
							<div className="all-goods">
								<span></span>
							</div>
						</div>
                        ) : "" 
                    }
				
					{activePage === "home" ? (
						<div className="nav__wrapper">
							<ul className="nav__content">
								<li className="nav__item _main" 
								    onClick={() => setActivePage("catalog")}
								    style={{'cursor': 'pointer'}}>
								    Каталог
								</li>
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
								<li className="nav__item _main" onClick = { () => setActivePage('catalog') }
								    style = {{'cursor': 'pointer'}}>Вибір товарів</li>
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
							<li className="nav__item _main" onClick = { () => setActivePage('catalog') }
							    style = {{'cursor': 'pointer'}}>Вибір товарів</li>
							<li className="nav__item" onClick = { () => setActivePage('cart') }
							    style = {{'cursor': 'pointer'}}>Кошик</li>
							<li className="nav__item">Оформлення замовлення</li>
						</ul>
					) : (
						""
					)}
					
					{activePage === "thanks" ? ( ""
						/*<ul className="nav__content">
							<li className="nav__item _main">Выбор товаров</li>
							<li className="nav__item" onClick = { () => setActivePage('cart') }
							    style = {{'cursor': 'pointer'}}>Кошик</li>
							<li className="nav__item">Оформлення замовлення</li>
						</ul>*/
					) : (
						""
					)}
				</nav>
			</div>

			{activePage === "home" ? pagesComponent[pageIndex] : ""}
			{activePage === "cart" ? (
				<Cart cart = {cart} activePage={activePage} setActivePage={setActivePage} forceUpdate = {forceUpdate} />
			) : (
				""
			)}
			{activePage === "checkout" ? <Checkout cart = {cart} activePage={activePage} setActivePage={setActivePage} forceUpdate = {forceUpdate} /> : ""}
			
			{ activePage === "thanks" ? <Thanks activePage={activePage} setActivePage={setActivePage} /> : "" }
			
			{ activePage.includes(':')? <Search input = { activePage.split(':')[1] } cart = {cart} forceUpdate = {forceUpdate} /> : "" }
			
			{ activePage === "catalog" ? <Catalog activePage={activePage} setActivePage={setActivePage} /> : "" }
			
			<ButtonScrollTop />
		</div>
	);
}

export default Home;
