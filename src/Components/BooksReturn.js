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
                        author={book.volumeInfo.authors}
                        link={book.volumeInfo.previewLink}
                        image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ""} 
                    />
                })
            }
        </div>
    )
}

export default BooksReturn;
