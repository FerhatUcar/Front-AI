import React, { Fragment, useState } from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';
import { CSVLink } from "react-csv";

import data from "../../data/data";
import headers from "../../data/headers";

const ReadCsv = () => {
    const [csvData, setCsvData] = useState(null);

    const rows = [1, 2, 3];
    const feedback = ['yes', 'no', 'yes'];

    const [show, setShow] = useState(false);
    const [text, setText] = useState('Classify');
    const [disable, setDisable] = useState(false);

    const handleFiles = files => {
        let reader = new FileReader();
        reader.onload = () => setCsvData(reader.result);
        reader.readAsText(files[0]);
    };

    const showClassify = e => {
        e.preventDefault();

        setShow(true);
        setText('Classified');
        setDisable(true);
    };

    return (
        <Fragment>
            <div className="box__buttons">
                <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                    <button className='box__btn'>Upload</button>
                </ReactFileReader>
                <span className="divider">|</span>
                <CSVLink
                    className="box__btn sm"
                    separator={";"}
                    enclosingCharacter={``}
                    data={data}
                    headers={headers}
                >
                    Download sample CSV
                </CSVLink>
                {csvData && (
                    <Fragment>
                        <span className="divider">|</span>
                        <button
                            disabled={disable}
                            onClick={showClassify}
                            className='box__btn'
                        >{text}</button>
                    </Fragment>
                )}
            </div>
            <div className="box__table">
                {csvData && (
                    <Fragment>
                        <CsvToHtmlTable
                            data={csvData}
                            csvDelimiter=";"
                            tableClassName="table"
                        />
                        {show && (
                            <table className="box__feedback">
                                <thead className="box__feedback--head">
                                    <tr><th>Feedback</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {rows.map((row, index) => (
                                            <td key={row}>
                                                {feedback[index]}
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </Fragment>

                )}
            </div>
        </Fragment>
    );
};

export default ReadCsv;
