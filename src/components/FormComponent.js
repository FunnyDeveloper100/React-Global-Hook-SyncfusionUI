import React, { useState } from 'react'
import { Formik } from "formik";
import FormikForm from "./FormikForm";
function App(props) {
    return (
        <Formik
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
            render={props => <FormikForm {...props} />}
        />
    );
}
export default App;


