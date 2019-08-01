import * as React from 'react';
import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';


const GenericMultiSelectCombo = ({ onChange, placeholder, id, fields,
    items, mode, showSelectAll, showDropDownIcon, filterBarPlaceholder }) => {

    return (
        <div>
            <MultiSelectComponent id={id} dataSource={items}
                fields={fields} placeholder={placeholder} mode={mode}
                showSelectAll={showSelectAll}
                showDropDownIcon={showDropDownIcon} filterBarPlaceholder={filterBarPlaceholder}
            >
                <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
        </div>
    );
};

export default GenericMultiSelectCombo;
