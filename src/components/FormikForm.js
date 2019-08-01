import React, { useState } from "react";
import GenericButton from './GenericButton';

function Form(props) {
    const [count, setCount] = useState([]);

    const [counter, setCounter] = useState(0);
    let { handleSubmit, handleChange } = props;
    const generateDynamicInput = () => {
        return count.map(i => (
            <div key={i}>
                <input type="text" onChange={handleChange} name={`name.${i}`} />
            </div>
        ));
    };
    return (
        <form onSubmit={handleSubmit}>
            {generateDynamicInput()}
            <div class="row">
                <GenericButton
                    type="button"
                    onClick={() => {
                        setCounter(counter + 1);
                        setCount([...count, counter]);
                    }}
                    value={"Add Name"}
                >
                </GenericButton>
                <GenericButton type="submit" value="Submit"></GenericButton>
            </div>
        </form>
    );
}
export default Form;
