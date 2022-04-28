
import { useParams } from "react-router-dom";
import './employeedetails.css'
import { useGetEmployeeDetailsQuery } from "../../../api";
import BlockLoading from "../../loading/loader1/loader1";

function EmployeeDetails (props){
    const { id } = useParams()
    console.log(id)
    const {data,error,isLoading}=useGetEmployeeDetailsQuery(id)
    console.log(data,error,isLoading)
    
    // return (
       
    // );
}

export default EmployeeDetails;