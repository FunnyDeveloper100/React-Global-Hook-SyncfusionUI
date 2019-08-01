import React from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';


const GenericTextBox = ({ placeholder, iconName = "search" }) => {
    return (
        <div className="col-sm-12 col-md-3 col-lg-auto d-md-inline-block">
            <div className="position-relative">
                <TextBoxComponent className="form-control" type="text" onChange={() => true}
                    placeholder={placeholder} />

            </div>
        </div>
    );
};

export default GenericTextBox;
