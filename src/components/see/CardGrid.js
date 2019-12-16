import React from 'react';

const CardGrid = () => {
    const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9',];

    return (
        <div className="card-grid">
            {items.map((value, index) => {
                 return (
                     <div className="card-grid__item" key={index}>
                        <div className="card-grid__image">{value}</div>
                         <div className="card-grid__text">
                             <p>Object: object_value</p>
                             Datum: 21-1-2020
                         </div>
                     </div>
                 )
            })}
        </div>
    );
};

export default CardGrid;
