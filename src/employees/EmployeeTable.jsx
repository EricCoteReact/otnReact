import React from 'react';
import {Table} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import { FaBackspace } from 'react-icons/fa';

 class EmployeeTable extends React.Component{
    editEmp(id) {
        this.props.history.push(`/list/${id}`)
    } 

    deleteEmp= (e,id) =>{ 
        e.stopPropagation();
        this.props.onDelete(id)
    }

    render() {
     
        return (
          
            <Table hover>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>             
            {this.props.employees.map(
                emp=><tr key={emp.id} 
                        onClick={
                           ()=>this.editEmp(emp.id)}>
                        <td style={{cursor: "pointer", verticalAlign: "middle"}} >{emp.firstName}</td> 
                        <td style={{cursor: "pointer", verticalAlign: "middle"}} >{emp.lastName}</td>
                        <td style={{ verticalAlign: "top"}}  >
                             <button className="text-button" onClick={(e) => this.deleteEmp(e, emp.id)}  >
                                 <FaBackspace size='1.5em'  />
                             </button>
                        </td>
                    </tr>  
            )}
            </tbody>
        </Table>   
    
        );

    }
 }
 
 export default withRouter(EmployeeTable);  
   

