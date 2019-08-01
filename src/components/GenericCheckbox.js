import * as React from 'react';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';



const GenericCheckbox = ({ checked = false, label, disabled, indeterminate, className, value, onchange }) => {
  return (
    <div>
      <CheckBoxComponent checked={checked} value={value} label={label}
        disabled={disabled} indeterminate={indeterminate} className={className} onChange={onchange}>
      </CheckBoxComponent>
    </div>
  );
};

export default GenericCheckbox;
