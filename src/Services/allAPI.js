import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";



export const addEmployeeAPI = async (EmployeeDetails)=>{ 
    return await commonAPI("POST",`${SERVER_URL}/EmployeeDetails`,EmployeeDetails)
}

export const getEmpAPI = async ()=>{ 
    return await commonAPI("GET",`${SERVER_URL}/EmployeeDetails`,"")
}


export const removeEmpAPI  = async (employeeId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/EmployeeDetails/${employeeId}`,{})

}


  export const updateEmpAPI = async (userDetails )=>{ 
    return await commonAPI("PUT",`${SERVER_URL}/EmployeeDetails/${userDetails.id}`, userDetails);
}  

