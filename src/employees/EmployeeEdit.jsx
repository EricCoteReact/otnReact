import React from 'react'
import EmployeeApi from '../api/employeeApi'
import EmployeeForm from './EmployeeForm'


export default class EmployeeEdit extends React.Component {
    constructor() {
        super();

        this.state = {id:'', firstName:"", lastName:"", 
                      formErrors: {}};
    }

    async componentDidMount() {
        let empId = this.props.match.params.id; //from the path '/list/:id'
    
        if (empId) {
          const employees = await EmployeeApi.getAllEmployees();
          // eslint-disable-next-line
          const employee = employees.find(emp=>emp.id==empId) ;
          if (employee) this.setState(employee);    
        }
    }
    
    changeValue = (e) => {
        this.setState({[e.target.id]: e.target.value}, this.employeeFormIsValid );
        
    }

    submitHandler = async (e) =>{
        e.preventDefault();
        if (!this.employeeFormIsValid()) return;

        try {
            await EmployeeApi.saveEmployee({id:this.state.id, 
                                  firstName: this.state.firstName,
                                  lastName:this.state.lastName });
            this.props.history.push("/list");     
        }
        catch (err) {
            alert(err);
        }            
    }

    //Returns true if valid
    //Returns false if there are 1 or more formErrors. 
    employeeFormIsValid() {
        let formErrors = {};
    
        if (this.state.firstName.length < 3) {
          formErrors.firstName = 'First name must be at least 3 characters.';
        }
    
        if (this.state.lastName.length < 3) {
          formErrors.lastName = 'Last name must be at least 3 characters.';
        }
    
        this.setState({formErrors} );
        return (Object.keys(formErrors).length === 0);
      }


    render() { 
        return (
          <>
            <h1>{this.state.id ? "Modify Employee" : "Add Employee"}</h1>
            <EmployeeForm {...(this.state)} 
                       onChange={this.changeValue}
                       onSubmit={this.submitHandler} />
          </>
        );
    }


}

