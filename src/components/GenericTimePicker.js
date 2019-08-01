import React from 'react';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';


const GenericTimePicker = ({ value, format, disableDates }) => {
  return (
    <div className="col-sm-12 col-md-3 col-lg-auto d-md-inline-block">
      <div className="position-relative">
        <TimePickerComponent value={value} />
      </div>
    </div>
  );
};

export default GenericTimePicker;
