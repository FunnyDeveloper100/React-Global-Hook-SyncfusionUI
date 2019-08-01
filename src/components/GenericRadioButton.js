import * as React from 'react';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';



const GenericRadioButton = ({ checked = false, label, value, name,className }) => {
    return (
      <div>
        <RadioButtonComponent  checked={checked} label={label} name={name} value={value} className={className}>
        </RadioButtonComponent>
      </div>
    );
  };
  
  export default GenericRadioButton;
  