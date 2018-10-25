import delay from './delay';

import { employees } from './employeeData'
//This would be performed on the server in a real app. Just stubbing in.

let maxid = employees.reduce(((currentMax, {id}) => currentMax>id ? currentMax : id), 0 );

const generateId = () => {
  return ++maxid;
};


class EmployeeApi {
  
  static getAllEmployees() {
      return new Promise( resolve => {
        setTimeout(() => {
          resolve([...employees]);
        }, delay);
      });
    }
  


  static saveEmployee(employee) {
  	employee = {...employee}; // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minEmpNameLength = 3;
        if (employee.firstName.length < minEmpNameLength) {
          reject(`First Name must be at least ${minEmpNameLength} characters.`);
          return;
        }

        if (employee.lastName.length < minEmpNameLength) {
          reject(`Last Name must be at least ${minEmpNameLength} characters.`);
          return;
        }

        if (employee.id) {  // eslint-disable-next-line
          const existingEmpIndex = employees.findIndex(({id}) => id == employee.id);
          employees.splice(existingEmpIndex, 1, employee);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
   
          employee.id = generateId();
          employees.push(employee);
        }
        resolve(employee);
      }, delay);
    });
  }

  static deleteEmployee(empId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const indexOfEmpToDelete = employees.findIndex(({id}) => (  // eslint-disable-next-line
          id == empId)
        );

        employees.splice(indexOfEmpToDelete, 1);
        resolve();
      }, delay);
    });
  }
}


export default EmployeeApi;