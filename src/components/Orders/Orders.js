import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Orders = () => {
    const { cartProducts } = useLoaderData();
    const [cart, setCart] = useState(cartProducts)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cartProducts.map(cartProduct => <Product product={cartProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Orders;