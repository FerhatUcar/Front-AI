import React, {Fragment} from 'react';
import Tabs from '../see/Tabs';
import PropTypes from "prop-types";

const SeeFront = ({title, title2, text}) => {
    return (
        <Fragment>
            <h1>{title} <span>{title2}</span></h1>
            <p className="white">{text}</p>
            <div className="box">
                <Tabs/>
            </div>
        </Fragment>
    );
};

SeeFront.propTypes = {
    title: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

SeeFront.defaultProps = {
    title: 'See',
    title2: 'Front',
    text: 'the model detects different objects (people, animals, objects etc..)'
};

export default SeeFront;

