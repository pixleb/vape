import { Header } from "./components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { useState } from "react";

function App() {
	const catalog = [
		"Премикс 18 мл",
		"Премикс 12 мл",
		"Глiцерин",
		"Нiкобустери",
		"Iнше",
	];

	const pages = {
		home: <Home />,
		cart: <Cart />,
		checkout: <Checkout />,
	};

	const [activePage, setActivePage] = useState("home");

	return (
		<>
			<Header
				catalog={catalog}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
			<Home
				catalogItems={catalog}
				pages={pages}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
		</>
	);
}

export default App;
