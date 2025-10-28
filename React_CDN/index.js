const styles = `
    body { font-family: Inter, Roboto, Arial, sans-serif; background:#f4f6f8; margin:0; padding:20px; color:#222; }
    .app { max-width:1100px; margin:0 auto; }
    .app-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
    .app-header h1 { margin:0; font-size:20px; color:#0f172a; }
    .grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:18px; }
    .card { background:#fff; padding:14px; border-radius:12px; box-shadow: 0 6px 18px rgba(17,24,39,0.08); display:flex; flex-direction:column; gap:10px; }
    .card-img { width:100%; height:170px; object-fit:cover; border-radius:8px; background:#e9eef5; }
    .title { margin:0; font-size:16px; color:#0b1220; font-weight:600; }
    .author { margin:0; font-size:14px; color:#475569; }
    .price { margin:0; font-size:15px; color:#0b8a56; font-weight:700; }
    .card-footer { display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:6px; }
    .btn { background:linear-gradient(90deg,#2563eb,#3b82f6); color:#fff; border:0; padding:8px 12px; border-radius:8px; cursor:pointer; font-weight:600; box-shadow:0 6px 12px rgba(59,130,246,0.18); transition:transform .12s ease, box-shadow .12s ease; }
    .btn:hover { transform:translateY(-3px); box-shadow:0 12px 24px rgba(59,130,246,0.2); }
    .muted { font-size:13px; color:#64748b; }
`;

// Append styles
const styleEl = document.createElement('style');
styleEl.textContent = styles;
document.head.appendChild(styleEl);

function Card(props) {
        const image = React.createElement('img', {
                src: props.image || "https://img.freepik.com/premium-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_779468-5822.jpg?w=2000",
                alt: props.title || "Book Image",
                className: 'card-img'
        });

        const h4 = React.createElement('h4', { className: 'title' }, props.title || "Untitled");
        const h3 = React.createElement('p', { className: 'author' }, "By: " + (props.author || "Unknown"));
        const h2 = React.createElement('p', { className: 'price' }, props.price || "$0");

        const btn = React.createElement('button', { className: 'btn', onClick: () => alert(`${props.title} added to cart`) }, "Add to cart");
        const footer = React.createElement('div', { className: 'card-footer' }, React.createElement('span', { className: 'muted' }, "In stock"), btn);

        return React.createElement('div', { className: "card" }, image, h4, h3, h2, footer);
}

// Sample data
const books = [
        { image: "", title: "Physics", author: "Resnick", price: "$80" },
        { image: "", title: "Chemistry", author: "Zumdahl", price: "$60" },
        { image: "", title: "Mathematics", author: "Stewart", price: "$70" },
        { image: "", title: "Biology", author: "Campbell", price: "$65" }
];

// Create list
const bookList = books.map((book, index) =>
        React.createElement(Card, {
                key: index,
                title: book.title,
                image: book.image,
                author: book.author,
                price: book.price
        })
);

// App wrapper with header
const header = React.createElement('div', { className: 'app-header' },
        React.createElement('h1', null, 'Book Store'),
        React.createElement('div', { className: 'muted' }, `${books.length} items`)
);

const bookContainer = React.createElement('div', { className: 'app' }, header, React.createElement('div', { className: 'grid' }, bookList));

// Render
const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);
root.render(bookContainer);
