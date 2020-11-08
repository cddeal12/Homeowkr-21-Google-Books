import React from 'react';
import BookCard from "./BookCard";

function BooksReturn(props) {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                        key ={i}
                        title={book.volumeInfo.title}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        author={book.volumeInfo.authors}
                    />
                })
            }
        </div>
    )
}

export default BooksReturn;
