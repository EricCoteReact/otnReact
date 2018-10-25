import React from 'react';
import EmployeeApi from '../api/employeeApi';
import EmployeeTable from './EmployeeTable';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';


export default class EmployeeList extends React.Component {
   constructor() {
       super();
       this.state ={ employees: [] };
   }

    async componentDidMount(){
       this.setState(
            { employees:  await EmployeeApi.getAllEmployees() }
        ); 
    }

    deleteEmployee = async (id) => {
        await EmployeeApi.deleteEmployee(id);
        await this.componentDidMount();
    }
    
    render() { 
        return (
            <>
                <h1>Employee List</h1>
                <Button className="my-3" color="primary" tag={Link} to='/list/add' >Add Employee</Button>  
                <EmployeeTable employees={this.state.employees}
                               onDelete={this.deleteEmployee}  />
            </>
        )
    }
}