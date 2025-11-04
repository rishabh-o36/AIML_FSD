import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
    const [items, setItem] = useState([]);
    
    useEffect(() => {
        fetch('http://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    return (
        <div>
            <Header />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {items.map((item, index) => (
                    <Cart key={index} item={item} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;