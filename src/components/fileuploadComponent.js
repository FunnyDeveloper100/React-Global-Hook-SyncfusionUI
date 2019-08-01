import React, { useState } from 'react'
import GenericFileUpload from './GerericFileUpload';
function App(props) {

    const allowedExtensions = '.csv, .xls, .xlsx';

    const [asyncSettings] = useState({
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    })

    return (
        <div className='upload_wrapper'>
            {/* Render Uploader */}
            <GenericFileUpload id='fileUpload' type='file'
                asyncSettings={asyncSettings} allowedExtensions={allowedExtensions}
            ></GenericFileUpload>
        </div>
    );
}
export default App;


