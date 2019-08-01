import React from 'react';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import readXlsxFile from 'read-excel-file'
import useGlobal from '../store';

const GenericFileUpload = ({ id, type, asyncSettings, allowedExtensions }) => {
    
    const [globalState, globalActions] = useGlobal();

    function onRemoveFile(args) {
        args.postRawFile = false;
    }

    function onUploadSuccess(args) {
        readXlsxFile(args.file.rawFile).then((rows) => {
//            console.log(rows);
            let results = [];
            for (let i = 1; i < rows.length; i++){
                let item = {}
                for( let j = 0; j < rows[i].length; j++) {
                    item[rows[0][j].replace(/\s+/g, '')] = rows[i][j]
                }
                results.push(item);
            }
            globalActions.setGridData(results);
        })
    }

    return (
        <div className="col-sm-12 col-md-3 col-lg-auto d-md-inline-block">
            <div className="position-relative">
                <UploaderComponent id={id} type={type}
                    asyncSettings={asyncSettings}
                    allowedExtensions={allowedExtensions}
                    success={onUploadSuccess.bind(this)}
                    removing={onRemoveFile.bind(this)}>
                </UploaderComponent>
            </div>
        </div>
    );
};

export default GenericFileUpload;
