import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button,FormGroup, FormFeedback} from 'reactstrap'

const firstName=React.createRef();

export default function EmployeeForm (props) {
    return (
    <Form onSubmit={props.onSubmit} >
        <Input type="hidden"
               id="empId"
               value={props.id} />
        <FormGroup>
          <Input type="text"
               id="firstName"
               placeholder="First Name"
               value={props.firstName}
               onChange={props.onChange}
              
               invalid={!!props.formErrors.firstName}
               />
            <FormFeedback >{props.formErrors.firstName}</FormFeedback> 
        </FormGroup>
        <FormGroup>
          <Input type="text"
               id="lastName"
               placeholder="Last Name"
               value={props.lastName} 
               onChange={props.onChange} 
               invalid={!!props.formErrors.lastName}
                />
               <FormFeedback >{props.formErrors.lastName}</FormFeedback>           
        </FormGroup>
        <FormGroup>
          <Button color="primary">Submit Employee</Button>
        </FormGroup>  
    </Form >
    );

}  

EmployeeForm.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
    onSubmit : PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };
