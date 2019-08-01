import React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';


const GenericDatePicker = ({ value, format, disableDate }) => {
    return (
        <div className="col-sm-12 col-md-3 col-lg-auto d-md-inline-block">
            <div className="position-relative">
                <DatePickerComponent value={value} />
            </div>
        </div>
    );
};

export default GenericDatePicker;
