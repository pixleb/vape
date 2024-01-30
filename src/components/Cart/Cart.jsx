import React from "react";

// сделан классом, т.к. нужен легкий доступ к изменению стейта из других компонентов
// функциональный компонент той же свободы не дал бы, при переносе всего кода на стейты
// он бы многократно дублировался
class CartComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        //console.log(props)
        
        this.state = { price: 0, quantity: 0 };
        this.stored = new Object();
    }
    
    add(item)
    {
        console.log('item passed into add: ', item);
        let itemCode = item.code;
        if (Object.keys(this.stored).includes(itemCode))
            this.stored[`${itemCode}`].quantity++;
        else this.stored[`${itemCode}`] = {...item, quantity: 1};
        //debug
        //console.log('cart is: ', this.stored);
        this.setUpdate();
    }
    
    rem(item)
    {
        console.log('item passed into rem: ', item);
        let itemCode = item.code, itemInCart = this.stored[`${itemCode}`];
        if (itemInCart.quantity - 1)
            itemInCart.quantity--;
        else delete this.stored[`${itemCode}`];
        //debug
        //console.log('cart is: ', this.stored);
        this.setUpdate();
    }
    
    remAll(item)
    {
        delete this.stored[`${item.code}`];
        this.setUpdate();
    }
    
    clear()
    {
        this.stored = new Object();
        this.setUpdate();
    }
    
    setUpdate()
    {
        let prod = Object.values(this.stored);

        let sumQuantity = 0, sumPrice = 0;

        prod.forEach(product => {
            sumQuantity += product.quantity;
            sumPrice += product.price * product.quantity;
        });
        
        this.setState({ price: sumPrice, quantity: sumQuantity });
    }
    
    render()
    {
        return (
            <div className="header__cart" onClick={() => this.props.setActivePage("cart")}>
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
				    <span>{ this.state.quantity ? String(this.state.price)+" грн" : "Кошик" }</span>
				    <div>
				        <span>{ String(this.state.quantity)+" товарів" }</span>
				    </div>
				    </div>
				</div>
            </div>
        );
    }
}

export default CartComponent;
