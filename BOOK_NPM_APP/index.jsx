import React from 'react';
import ReactDOM from 'react-dom/client';    

function Book(){
    return (
        <div>
            <img src="https://wallpapers.com/images/file/book-pictures-5m0cu37baos2nf63.jpg" alt="BOOK IMAGE" width="200" height="200" />
            <h2>Title : Physics</h2>
            <p>Price: ₹700.00</p>
            <button>Add to Cart</button>
        </div>
    );
}

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);
root.render(<Book />);