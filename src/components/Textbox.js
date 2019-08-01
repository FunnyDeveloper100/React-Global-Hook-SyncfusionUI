import GenericTextBox from './GenericTextBox';
import React, { useState } from "react";
import GenericRadioButton from './GenericRadioButton';
import GenericCheckbox from './GenericCheckbox';

function App(props) {
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`User Name ${username},Last Name ${lastname}`)
    }
    const [disableInputIsChecked, setDisableInputIsChecked] = React.useState(false);

    const [radioIsChecked, setRadioInputIsChecked] = React.useState(true);
    function handleCheckboxClick(event) {
        setDisableInputIsChecked(prevValue => !prevValue); // invert value
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='checkbox-control'>
                <div className='row'>
                    <GenericCheckbox checked={disableInputIsChecked} label={disableInputIsChecked}
                        onchange={handleCheckboxClick}></GenericCheckbox>
                </div>
                <div className='row'>
                    <GenericCheckbox label='Checked, Disabled' disabled={true} checked={true} ></GenericCheckbox>
                </div>
                <div className='row'>
                    <GenericCheckbox label='Indeterminate, Disabled' indeterminate={true} disabled={true}></GenericCheckbox>
                </div>
            </div>
            <br />
            <div className='radiobutton-control'>
                <h4>Select a payment method</h4>
                <div className='row'>
                    <GenericRadioButton checked={radioIsChecked} label='Credit/Debit card' name='payment' value="credit/debit"></GenericRadioButton>
                </div>
                <div className='row'>
                    <GenericRadioButton label='Net Banking' name='payment' value="netbanking"></GenericRadioButton>
                </div>
                <div className='row'>
                    <GenericRadioButton label='Cash on Delivery' name='payment' value="cashondelivery"></GenericRadioButton>
                </div>
                <div className='row'>
                    <GenericRadioButton label='Other Wallets' name='payment' value="others"></GenericRadioButton>
                </div>
            </div>
            <br />
            <div className="textboxes">
                <h4>FloatLabelType as Auto</h4>
                <GenericTextBox placeholder="First Name" value={username} floatLabelType="Auto" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="textboxes">
                <h4>FloatLabelType as Always</h4>
                <GenericTextBox placeholder="Last Name" value={lastname} floatLabelType="Always" onChange={e => setLastname(e.target.value)} />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )

};
export default App;