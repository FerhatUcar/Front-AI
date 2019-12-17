import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ title, title2 })  => {
    return (
        <div className="box__small">
            <h1>{title} <span>{title2}</span></h1>
            <p className="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

Home.propTypes = {
    title: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
};

Home.defaultProps = {
    title: 'Welcome to the homepage',
    title2: 'Front AI'
};

export default Home;
