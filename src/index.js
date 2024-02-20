import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./scss/app.scss";

import App from "./App";

import store from "./redux/store/store";

class Cart 
{
    constructor()
    {
        this.stored = new Object();
    }
    
    add(item)
    {
        let itemCode = item.code;
        if (Object.keys(this.stored).includes(itemCode))
            this.stored[`${itemCode}`].quantity++;
        else this.stored[`${itemCode}`] = {...item, quantity: 1};
    }
    set(item, quantity)
    {
        let itemCode = item.code;
        quantity? (this.stored[`${itemCode}`].quantity = quantity) : (delete this.stored[`${itemCode}`]);
    }
    
    rem(item)
    {
        let itemCode = item.code, itemInCart = this.stored[`${itemCode}`];
        if (itemInCart.quantity - 1)
            itemInCart.quantity--;
        else delete this.stored[`${itemCode}`];
    }
    
    remAll(item)
    {
        delete this.stored[`${item.code}`];
        console.log(this.stored)
    }
    
    clear()
    {
        this.stored = new Object();
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App cart = { new Cart() } />
	</Provider>
);
