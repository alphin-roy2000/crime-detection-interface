

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';

import { useGetEmployeeDetailsQuery, useGetEmployeeListQuery, useUpdateEmployeeMutation } from '../../../../api';
import EmployeeHeader2 from "../../header.js  /header2";
function EmployeeEdit(){
    const { id } = useParams()

    const [updateEmployee, { isLoading, isSuccess }] = useUpdateEmployeeMutation();
    const navigate = useNavigate();
const [data,setData] = useState({
  name:"",
  username:"",
  age:"",
  departmentId:"",
  password:"Anto@2160",
 role_id:"",
 isActive:""

})
const { data: studentData } = useGetEmployeeDetailsQuery(id)
const roles=[{
  label:"Admin",
  value:"c2518086-20af-40d7-8b5d-e84251bfeb57"
},{
  label:"Engineer",
  value:"c8e08d0f-aec4-4c7e-b1c3-f6df356e0d8f"
}
]

useEffect(() => {
    var dat1={};
    if (studentData) {
        dat1=studentData.data
        dat1={...dat1,role_id:studentData.data.roleId}

    

      setData(dat1)
    
    }
  }, [studentData]);
 

const handleChange = (e) =>{console.log(e.target.value)
  setData({ ...data, [e.target.name]: e.target.value });}
  

const handleSubmit = async (e) => {
  e.preventDefault();
  const d1= await updateEmployee(data);
  console.log(d1)
console.log("udpdate data",data)
  setData({
    name:"",
  username:"",
  age:"",
  departmentId:"",
  password:"Anto@2160",
 role_id:"",
 isActive:""
//  address:"",
//  state:""
  });

  navigate(-1)
};

    return (
        <div>
 <EmployeeHeader2 title="Edit Employee"/>
 <div className='createEmployee'>
            <div  id="myfrm">
                <div class="form-input-box-container">
                  <div class="input-card1">
                    <label for="name">Employee Name</label>
                    {/* <input type="text" id="name" name="empname" placeholder="Employee Name"> */}
                    <input type="text" value={data.name} name="name" onChange={handleChange}  placeholder='Employee Name' />
                  </div>
                  <div class="input-card1">
                    <label for="id">Employee username</label>
                    <input  type="text" name="username" value={data.username}  onChange={handleChange} id="username" placeholder="Username"/>
                  </div>
                  <div class="input-card1">
                    <label for="join">Age</label>
                    <input type="number" id="join" value={data.age} name="age" onChange={handleChange} placeholder="Age"/>
                  </div>
                  <div class="input-card1">
                    <label for="role">Role</label>
                    <select name="role_id" value={data.role_id} id="role" onChange={handleChange}>
                    {/* <option disabled selected value> -- select an option -- </option> */}
                        <option value="c2518086-20af-40d7-8b5d-e84251bfeb57" >Admin</option>
                        <option value="c8e08d0f-aec4-4c7e-b1c3-f6df356e0d8f">Engineer</option>

                    </select>
                  </div>
                  <div class="input-card1">
                    <label for="status">Status</label>
                    <select name="isActive" value={data.isActive} id="status" onChange={handleChange}>
                  
                        <option value='true' >Active</option>
                        <option value='false'>Inactive</option>
                    </select>
                  </div>
                
                  <div class="input-card1">
                    <label for="department">Department</label>
                    <input type="text" id="department" value={data.departmentId} name="departmentId" onChange={handleChange} placeholder="Department"/>
                  </div>
                  {/* <div class="input-card1">
                    <label for="place">Place</label>
                    <input type="text" id="place" value={data.address} name="address" onChange={handleChange} placeholder="Place"/>
                  </div>
                  <div class="input-card1">
                  <label for="state">State</label>
                    <input type="text" id="state"  value={data.state} name="state" onChange={handleChange} placeholder="State"/>
                  </div> */}
                </div>
              </div>

                <div class="btn-container">
                  
                <button onClick={handleSubmit} class="btn btn-primary" id="main-btn">Update</button>
                  <button onClick={()=>{navigate(-1)}} class="btn btn-secondary">Cancel</button>
                
                </div>
              
        </div>
        
        </div>
       
    )
}
// export const AddEmployee=(props)=>{
//   const navigate = useNavigate();

//   const [addEmployee]=useAddEmployeeMutation()
//   const {refetch} = useGetEmployeeListQuery()
// console.log(props.state)
//   const addHandler=async ()=>{
//     await addEmployee(props.state);
//     refetch()
//     navigate(-1)
//   }
  
//   return (
    
//   );
// }
export default EmployeeEdit;

