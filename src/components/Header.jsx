import React from "react";

import Catalog from "./UI/Catalog/Catalog";
import Logo from "../assets/img/logo.svg";
import SearchBar from "./SearchBar/SearchBar";

function Header({ catalog, activePage, setActivePage }) {
	return (
		<>
			<div className="header _desc">
				<div className="header__content container">
					<img
						src={Logo}
						alt="Fluffy Puff"
						className="header__logo"
						onClick={() => setActivePage("home")}
					/>
					<Catalog
						items={catalog}
						activePage={activePage}
						setActivePage={setActivePage}
					/>
					<SearchBar setActivePage = {setActivePage} />
					<div className="header__cart" onClick={() => setActivePage("cart")}>
						<div className="header__cart-content">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
							>
								<path
									d="M24 16.5V10.5C24 7.18629 21.3137 4.5 18 4.5C14.6863 4.5 12 7.18629 12 10.5V16.5M7.5 13.5H28.5L30 31.5H6L7.5 13.5Z"
									stroke="white"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="header__cart-body">
								<span>Кошик</span>
								<div>
									<span></span>
								</div>
							</div>
						</div>
					</div>
					<SearchBar className="header__cart-search _mob" />
				</div>
			</div>
			<div className="header _mob">
				<div className="header__content container">
					<div className="header__top">
						<Catalog
							items={catalog}
							activePage={activePage}
							setActivePage={setActivePage}
						/>

						<img
							src={Logo}
							alt="Fluffy Puff"
							className="header__logo"
							onClick={() => setActivePage("home")}
						/>
						<div className="header__cart" onClick={() => setActivePage("cart")}>
							<div className="header__cart-content">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
								>
									<path
										d="M24 16.5V10.5C24 7.18629 21.3137 4.5 18 4.5C14.6863 4.5 12 7.18629 12 10.5V16.5M7.5 13.5H28.5L30 31.5H6L7.5 13.5Z"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<div className="header__cart-body">
									<span>Кошик</span>
									<div>
										<span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<SearchBar className="header__cart-search _mob" />
				</div>
			</div>
		</>
	);
}

export default Header;
