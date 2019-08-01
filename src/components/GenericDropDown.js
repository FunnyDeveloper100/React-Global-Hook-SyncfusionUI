import React, { useState } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


const GenericDropDown = ({ onChange, placeholder, id, fields, className, defaultText, itemWidth, size = 'sm',
  items }) => {
  return (
    <div>
      <DropDownListComponent dataSource={items} fields={fields} placeholder={placeholder}
        onChange={onChange} className={className} id={id} defaultText={defaultText}  >
      </DropDownListComponent>

    </div>
  );
};

export default GenericDropDown;
