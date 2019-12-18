import React, { Fragment, useState } from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';
import { CSVLink } from "react-csv";

import data from "../../data/data";
import headers from "../../data/headers";

const ReadCsv = () => {
    const [csvData, setCsvData] = useState(null);

    const handleFiles = files => {
        let reader = new FileReader();
        reader.onload = () => setCsvData(reader.result);
        reader.readAsText(files[0]);
    };

    return (
        <Fragment>
            <div className="box__buttons">
                <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                    <button className='box__btn'>Upload</button>
                </ReactFileReader>
                <span>or</span>
                <CSVLink
                    className="box__btn sm"
                    separator={";"}
                    enclosingCharacter={``}
                    data={data}
                    headers={headers}
                >
                    Download sample CSV
                </CSVLink>

            </div>
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
