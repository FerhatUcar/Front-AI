import React, {Fragment} from 'react';
import Read from '../read/Read';
import PropTypes from "prop-types";

const ReadFront = ({title, title2, text}) => {
    return (
        <Fragment>
            <h1>{title} <span>{title2}</span></h1>
            <p className="white">{text}</p>
            <div className="box">
                <Read />
            </div>
        </Fragment>
    );
};

ReadFront.propTypes = {
    title: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

ReadFront.defaultProps = {
    title: 'Read',
    title2: 'Front',
    text: 'Sentiment analysis on generic english text.'
};

export default ReadFront;
