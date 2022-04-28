
import { useGetDepartmentDetailsQuery } from "../../../api";
import BlockLoading from "../../loading/loader1/loader1";
import DepartmentItem from "./item/item";

function DepartmentListStyle(){
   
    const { data, error, isLoading } =  useGetDepartmentDetailsQuery();
   
    // console.log("dep,",data.data)
    return (
        <div style={{margin:"10px"}}>

{isLoading?<div className="loader-1"><BlockLoading/></div>:
<table  cellSpacing={0}>
 <thead>
    <tr className="header">
      <th >Department ID</th>
      <th >Department Name </th>
      <th >Room</th>
      <th >Code</th>
      <th >Website</th>
        

    </tr>
    </thead>
    <tbody>
     {data.data.map((employee,idx)=>(
        <DepartmentItem employee={employee} key={idx}/>
    ))}
 </tbody>
</table>
}     
        </div>
        
    )
}
export default DepartmentListStyle;

