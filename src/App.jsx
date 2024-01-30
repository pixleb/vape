import { Header } from "./components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import React from "react";

import CartComponent from './components/Cart/Cart';


function App()
{
    const [activePage, setActivePage] = React.useState('home');
    
    const catalog = [
        "Премикс 18 мл",
        "Премикс 12 мл",
        "Глiцерин",
        "Нiкобустери",
        "Iнше",
    ];
        
    let cartComponent = <CartComponent activePage={activePage} setActivePage={setActivePage} />
    //let cart = this.cartRef.current;
    let cart = null;  
        
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
			/>
		</>
    );    
	
}

export default App;
