class Cart 
{
    constructor()
    {
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
        console.log('cart is: ', this.stored);
    }
    
    rem(item)
    {
        console.log('item passed into rem: ', item);
        let itemCode = item.code, itemInCart = this.stored[`${itemCode}`];
        if (itemInCart.quantity - 1)
            itemInCart.quantity--;
        else delete this.stored[`${itemCode}`];
        //debug
        console.log('cart is: ', this.stored);
    }
    
    remAll(item)
    {
        delete this.stored[`${item.code}`];
    }
}

let cart = new Cart();

// не ошибка, здесь передается именно созданный экземпляр, а не сам класс
export default cart;
