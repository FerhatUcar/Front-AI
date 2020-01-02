import React, {Fragment, useState} from 'react';
import ReactFileReader from "react-file-reader";

const Read = () => {
    // eslint-disable-next-line
    const [data, setData] = useState(null);

    const handleFiles = files => {
        let reader = new FileReader();
        reader.onload = () => setData(reader.result);
        reader.readAsText(files[0]);
    };

    return (
        <Fragment>
            <ReactFileReader handleFiles={handleFiles} fileTypes={'.txt'}>
                <button className='box__btn'>Upload</button>
            </ReactFileReader>
        </Fragment>
    );
};

export default Read;
