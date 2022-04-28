import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteEmployeeMutation } from "../../../../api";

const DepartmentItem =(props)=>{
    const navigate = useNavigate();
    const [deleteEmployee , {isLoading,isSuccess}]=useDeleteEmployeeMutation()
    useEffect(() => {
        if (isLoading) {
          console.log({ content: "deleting..."});
        }
        if (isSuccess) {
          console.log({ content: "deleted successfully"});
        }
      }, [isLoading, isSuccess]);
    const {department}=props
 
    return (
        <tr className='employee'>
            <td>{department.id}</td>
            <td>{department.username}</td>
             <td>{department.name}</td>
             <td>{department.role.role}</td>
            
               
        </tr>
    );
}

export default DepartmentItem;