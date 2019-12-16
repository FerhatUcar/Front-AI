import React from 'react';
import Image from '../../assets/img/img.jpg';

const Card = () => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={Image} alt="img"/>
            </div>
            <div className="card__text">
                <h2>Object</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>

                <h4>Date</h4>
                <p>12-21-2019</p>
            </div>
        </div>
    );
};

export default Card;
