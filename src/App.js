import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "./components/Button";
import Grid from "./components/Grid";
import Dropdown from "./components/Dropdown";
import Textbox from "./components/Textbox";
import FormComponent from "./components/FormComponent";
import  DateComponent from "./components/DateComponent";
import FileUploadComponent from "./components/fileuploadComponent";
const  App =()=> {
  
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Button</Link>
           
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/grid" className="nav-link">Grid</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/drops" className="nav-link">Dropdown</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/text" className="nav-link">Textbox</Link>
                </li>
               <li className="navbar-item">
               <Link to="/formik" className="nav-link">Formik</Link>
               </li>
               <li className="navbar-item">
               <Link to="/dateTime" className="nav-link">DateTime</Link>
               </li>
               <li className="navbar-item">
               <Link to="/fileUpload" className="nav-link">fileUpload</Link>
               </li>
              </ul>
        
          </nav>
          <br/>
          <Route path="/" exact component={Button} />
          <Route path="/Grid" component={Grid} />
          <Route path="/drops" component={Dropdown} />
          <Route path="/text" component={Textbox} />
          <Route path="/formik" component={FormComponent} />
          <Route path="/dateTime" component={DateComponent} />
          <Route path="/fileUpload" component={FileUploadComponent} />
          
        </div>
      </Router>
    );
    }  
export default App;

