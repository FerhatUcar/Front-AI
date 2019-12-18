import React, {Fragment} from 'react';
import ReadCsv from "../classify/ReadCsv";
import PropTypes from "prop-types";

const ClassifyFront = ({title, title2, text}) => {
    return (
        <Fragment>
            <h1>{title} <span>{title2}</span></h1>
            <p className="white">{text}</p>
            <div className="box">
                <ReadCsv />
            </div>
        </Fragment>
    );
};

ClassifyFront.propTypes = {
    title: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

ClassifyFront.defaultProps = {
    title: 'Classify',
    title2: 'Front',
    text: 'Classifies the model for fraud detection (bank details)'
};

export default ClassifyFront;
