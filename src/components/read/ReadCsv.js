import React, { Fragment, useState } from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';

const ReadCsv = () => {
    const [csvData, setCsvData] = useState(null);

    const handleFiles = files => {
        let reader = new FileReader();
        reader.onload = () => setCsvData(reader.result);
        reader.readAsText(files[0]);
    };

    return (
        <Fragment>
            <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                <button className='box__btn'>Upload</button>
            </ReactFileReader>
            <div className="box__table">
                {csvData && (
                    <CsvToHtmlTable
                        data={csvData}
                        csvDelimiter=";"
                        tableClassName="table"
                    />
                )}
            </div>
        </Fragment>
    );
};

export default ReadCsv;
