
import { useNavigate, useParams } from "react-router-dom";
import './departmentdetails.css'
import { useGetDepartmentListQuery, useGetDepartmentWithDetailsQuery, useGetEmployeeDetailsQuery } from "../../../api";
import BlockLoading from "../../loading/loader1/loader1";
import EmployeeHeader from "../header.js  /header";

function DepartmentDetails (props){

    const {data,error,isLoading}=useGetDepartmentWithDetailsQuery()
    console.log("data12",data)
    const navigate =useNavigate()
    return (
      
            <div>
                {isLoading ?<BlockLoading/>:
     <div><EmployeeHeader name="Edit" filter="false" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>} title="Employee details" onclick={()=>{console.log("sdfsd");navigate(`/employee/edit/${data.data.id}`);}}/>
    <div>
                <div class="input-box-container">
                <div  class="input-card1">
                <h5 className="title">Department Id</h5>
                <h6 className="subtitle">{data.data.DepartmentDetails_id}</h6>
                </div>
                <div  class="input-card1">
                <h5 className="title">Department Name</h5>
                <h6 className="subtitle">{data.data.name}</h6>
                </div>
                <div  class="input-card1">
                <h5 className="title">Room no</h5>
                <h6 className="subtitle">{data.data.username}</h6>
                </div>
                {/* <div  class="input-card">
                <h5 className="title">Address</h5>
                <h6 className="subtitle">{data.data.address}</h6>
                </div> */}
                <div  class="input-card1">
                <h5 className="title">Active</h5>
                <h6 style={data.data.isActive?{backgroundColor: "rgb(149, 241, 149)"}:{backgroundColor: "red"}} className="subtitle ana">{data.data.isActive?"Active":"InActive"}</h6>
                </div>
       
                {/* <div  class="input-card">
                <h5 className="title">Employee ID proof</h5>
                <button className='idfile'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-medical-fill" viewBox="0 0 16 16">
      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
    </svg></button>
                </div> */}
            </div>
           </div></div>}
            </div>
    );
}

export default DepartmentDetails;