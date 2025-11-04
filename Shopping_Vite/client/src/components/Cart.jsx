import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ item }) => {
    const [count, setCount] = useState(1);

    const addToCart = () => {
        alert(`${count} ${item.title}(s) added to cart`);
    };

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev > 1 ? prev - 1 : 1);
    };

    return (
        <div className="card">
            <img 
                src={item.image} 
                width={200} 
                height={200} 
                alt={item.title}
            />
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <div className="counter">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Cart;