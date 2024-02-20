import React from "react";

import { Header } from "./components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

import CartComponent from './components/Cart/Cart';


function App({ cart })
{
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    
    const [activePage, setActivePage] = React.useState("catalog");
    
    const catalog = [
        "Премiкс 18 мл",
        "Премiкс 12 мл",
        "Глiцерин",
        "Нiкобустери",
        "Iнше",
    ];
        
    let cartComponent = <CartComponent activePage={activePage} setActivePage={setActivePage} cart = {cart} />

    return (
		<>
			<Header
				catalog={catalog}
				activePage={activePage}
				setActivePage={setActivePage}
				cart = {cartComponent}
			/>
			<Home
				catalogItems={catalog}
				activePage={activePage}
				setActivePage={setActivePage}
				cart = {cart}
				forceUpdate = {forceUpdate}
			/>
		</>
    );    
	
}

export default App;
