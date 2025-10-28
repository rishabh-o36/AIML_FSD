import './APP.css';

function Book(book){
    return (        
        <div className="card">
            <img 
                src={book.image || "https://img.freepik.com/premium-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_779468-5822.jpg?w=2000"}             
                alt={book.title || "Book Image"}
            />
            <h3>title : {book.title || "Unknown Title"}</h3>
            <h4>price : {book.price}/-</h4>
        </div>
    );
}

export default Book;