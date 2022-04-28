import { useNavigate } from "react-router-dom";
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from "../../../api";
import BlockLoading from "../../loading/loader1/loader1";
import EmployeeItem from "./item/item";
import './list.css'

function ListStyle(){
    // const {employee}=props
   
    const { data, error, isLoading } =  useGetEmployeeListQuery();
   
    console.log(data)
    return (
        <div style={{margin:"10px"}}>

{isLoading?<div className="loader-1"><BlockLoading/></div>:
<table  cellSpacing={0}>
 <thead>
    <tr className="header">
      <th >Employee ID</th>
      <th >Employee Username </th>
      <th >Employee Name</th>
      <th >Role</th>
      <th >Status</th>
      <th >Action</th>

    </tr>
    </thead>
    <tbody>
     {data.data.map((employee,idx)=>(
        <EmployeeItem employee={employee} key={idx}/>
    ))}
 </tbody>
</table>
}     
        </div>
        
    )
}
export default ListStyle;

