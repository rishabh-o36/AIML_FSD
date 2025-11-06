import React, { useEffect } from 'react';
const ShoppingCart = () => {
    const [cartItems, setCartItems] = React.useState([]);
    const [error, setError] = React.useState(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch(error => setError(error.message));
    }, []);
    return (
        <div>
            {error && <h1>Error : {error}</h1>}
            {cartItems.map((it, i)=>{
                <Cart key={i} data={it} />
            })} 
        </div>
    )
}

export default ShoppingCart;
