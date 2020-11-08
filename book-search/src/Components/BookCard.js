import React from "react";

const BookCard = (props) => {
    return(
        <div className="card-container border rounded my-3 bg-dark text-white">
            <img className="p-3" src={props.image} alt={props.title}/>
            <div className="desc p-3">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <a className="btn btn-primary" href={props.link}>Go to E-Reader</a>
            </div>
        </div>
    )
};

export default BookCard;
