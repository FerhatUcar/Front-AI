import React, {useState, Fragment} from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';

import './assets/scss/App.scss';

const App = () => {
    const [csvData, setCsvData] = useState(null);

    const rows = [1, 2, 3];

    const handleFiles = files => {
        let reader = new FileReader();
        reader.onload = () => setCsvData(reader.result);
        reader.readAsText(files[0]);
    };

    return (
        <div className="container">
            <div className="box">
                <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                    <button className='box__btn'>Upload</button>
                </ReactFileReader>
                <div className="box__table">
                    {csvData && (
                        <Fragment>
                            <CsvToHtmlTable
                                data={csvData}
                                csvDelimiter=";"
                                tableClassName="table"
                            />
                            <table className="box__feedback">
                                <thead className="box__feedback--head">
                                    <tr><th>Feedback</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {rows.map(row => (
                                            <td key={row}>
                                                <i className="far fa-smile" />
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
