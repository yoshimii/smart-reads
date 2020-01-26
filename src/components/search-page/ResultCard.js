import React from 'react';

const ResultCard = (props) => {


    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.authors}</p>
            <p>{props.rating}</p>
            <p>{props.isbn}</p>
        </div>
    )
}

export default ResultCard;