
import {Routes,Route } from 'react-router-dom';
import DepartmentComponent from './department details/departmentcomponents.jsx';
import EmployeeCreate from './employee details/createemployee.jsx';

import EmployeeList from './employee details/employeelist.jsx';
import EmployeeComponent from './employee details/employeecomponents'

import './rightpanel.css'
import Welcome from './welcome.jsx';
import EmployeeEdit from './employee details/EmployeeEdit/employeeedit.jsx';
function RightNav(props){
    const employee = props
    // console.log(employee)
    return (
        <div className="RightNav">
        <div class="container"></div>
      
            
                <Routes>
                <Route exact path="/" element={<Welcome/>}/>
                    <Route path="employee" element={<EmployeeList  />}/>
                    <Route path="employee/:id" element={<EmployeeComponent />}/>
                    <Route exact path="employee/create" element={<EmployeeCreate />}/>
                    <Route exact path="employee/edit/:id" element={<EmployeeEdit />}/>
                    <Route exact path="departments" element={<DepartmentComponent/>}/>
                    
                </Routes>
           
           
        </div>
    );
}
export default RightNav;

