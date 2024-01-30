import React from "react";

import Catalog from "./UI/Catalog/Catalog";
import Logo from "../assets/img/logo.svg";
import SearchBar from "./SearchBar/SearchBar";

function Header({ catalog, activePage, setActivePage, cart }) {
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
					{ cart }
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
						{ cart }
					</div>
					<SearchBar className="header__cart-search _mob" />
				</div>
			</div>
		</>
	);
}

export default Header;
