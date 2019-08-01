import GenericDatePicker from './GenericDatePicker';
import GenericTimePicker from './GenericTimePicker';
import GerericDateTimer from './GerericDateTimer';
import React, { useState } from 'react'

function App(props) {

    const [date, Setdate] = useState(new Date())
    return (
        <div>
            <GenericDatePicker value={date}></GenericDatePicker>
            <hr />
            <GenericTimePicker></GenericTimePicker>
            <hr />
            <GerericDateTimer></GerericDateTimer>
        </div>
    );
}
export default App;


