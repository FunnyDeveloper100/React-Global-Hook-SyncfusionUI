import * as React from 'react';
import { ComboBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';


const GenericComboBox = ({ onChange, placeholder, id, fields, className, itemWidth, size = 'sm',
    items, value }) => {

    return (
        <div>
            <ComboBoxComponent dataSource={items} fields={fields} placeholder={placeholder}
                onChange={onChange} className={className} id={id} value={value}>
            </ComboBoxComponent>

        </div>
    );
};

export default GenericComboBox;
