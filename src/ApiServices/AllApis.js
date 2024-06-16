import { base_url } from "./baseUrl";
import { commonRequest } from "./commonStructure";

export const accessRecipiesApi=async()=>{
    return await commonRequest('GET',`${base_url}/recipies`,{})
}

export const addRecipiesApi=async(bodyData)=>{
    return await commonRequest('POST',`${base_url}/recipies`,bodyData)
}

export const deleteRecipiesApi=async(id)=>{
    return await commonRequest('DELETE',`${base_url}/recipies/${id}`,{})
}

export const updateRecipiesApi=async()=>{
    return await commonRequest('UPDATE',`${base_url}/recipies`,{})
}

export const accessEditedApi=async(id)=>{
    return await commonRequest('GET',`${base_url}/recipies/${id}`,{})
}
export const editRecipiesApi=async(BodyData,id)=>{
    return await commonRequest('PUT',`${base_url}/recipies/${id}`,BodyData)
}