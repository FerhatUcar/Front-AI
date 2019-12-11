import React, {useState} from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';

import './assets/scss/App.scss';

const App = () => {
    const [csvData, setCsvData] = useState(null);

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
                        <CsvToHtmlTable
                            data={csvData}
                            csvDelimiter=";"
                            tableClassName="table"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
