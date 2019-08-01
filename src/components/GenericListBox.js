import * as React from 'react';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';


const GenericListBox = ({ id, fields, className, allowDragAndDrop,
    items, toolbarSettings, scope }) => {
    return (
        <div>
            <ListBoxComponent dataSource={items} fields={fields} allowDragAndDrop={allowDragAndDrop}
                className={className} id={id} toolbarSettings={toolbarSettings} scope={scope}>
            </ListBoxComponent>
        </div>
    );
};

export default GenericListBox;
