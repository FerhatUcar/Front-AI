import React, {Fragment} from 'react';
import ReadCsv from "../read/ReadCsv";

const ReadFront = () => {
    return (
        <Fragment>
            <h1>Read Front</h1>
            <div className="box">
                <ReadCsv />
            </div>
        </Fragment>
    );
};

export default ReadFront;
