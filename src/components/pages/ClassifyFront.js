import React, {Fragment} from 'react';
import ReadCsv from "../classify/ReadCsv";

const ClassifyFront = () => {
    return (
        <Fragment>
            <h1>Classify Front</h1>
            <div className="box">
                <ReadCsv />
            </div>
        </Fragment>
    );
};

export default ClassifyFront;
