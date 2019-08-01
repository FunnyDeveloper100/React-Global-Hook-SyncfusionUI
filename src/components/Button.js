import React, { useState } from 'react'
import {
  Form, FormGroup, Input, Label, Col
} from 'reactstrap';
import GenericButton from './GenericButton';

const FunctionForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    alert('Button clicked');
  }
  return (
    // <Form onSubmit={ handleSubmit }>
      <Form>
      <h1>Function Based Form</h1>
      <FormGroup row>
        <Label for="exampleEmail" sm={ 2 }>Email</Label>
        <Col sm={ 8 }>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email"
            value={ email }
            onChange={ event => setEmail(event.target.value) }
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={ 2 }>Password</Label>
        <Col sm={ 8 }>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password"
            value={ password }
            onChange={ event => setPassword(event.target.value) }
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={ { size: 10, offset: 8 } }>
          <GenericButton value="Submit" onClick={handleSubmit}></GenericButton>
        </Col>
      </FormGroup>
      
    </Form>
    
  )
};

export default FunctionForm;