import * as React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';



const GenericButton = ({ disabled = false, size = 'sm', onClick, value, variant = 'primary', className }) => {
    return (
        <div>
            <ButtonComponent variant={variant} size={size} onClick={onClick} disabled={disabled} className={className}>
                {value}
            </ButtonComponent>
        </div>
    );
};

export default GenericButton;
