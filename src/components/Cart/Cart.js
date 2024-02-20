import React from "react";
 
function CartComponent({ activePage, setActivePage, cart })
{
    let prod = Object.values(cart.stored);

    let sumQuantity = 0, sumPrice = 0;

    prod.forEach(product => {
        sumQuantity += product.quantity;
        sumPrice += product.price * product.quantity;
    });
        
    return (
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
				    <span>{ sumQuantity ? String(sumPrice)+" грн" : "Кошик" }</span>
				    <div>
				        <span>{ sumQuantity+" товарів" }</span>
				    </div>
				</div>
            </div>
        </div>
    );
}


export default CartComponent;
