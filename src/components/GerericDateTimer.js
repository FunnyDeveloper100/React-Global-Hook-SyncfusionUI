import React from 'react';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';


const GenericDateTimePicker = ({ value ,format, disableDates}) => {
  return (
    <div className="col-sm-12 col-md-3 col-lg-auto d-md-inline-block">
      <div className="position-relative">
      <DateTimePickerComponent value={value}></DateTimePickerComponent>
      </div>
    </div>
  );
};

export default GenericDateTimePicker;
