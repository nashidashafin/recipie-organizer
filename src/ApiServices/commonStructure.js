import axios from "axios";

export const commonRequest=async(method,url,body)=>{
    let config={
        // method:method
        method,
        // url:url
        url,
        data:body
    }
   return await axios(config).then(result=>{    //when it resolves, it returns result
        return result
    }).catch(result=>{    // when it rejects it returns rejected output
        return result
    })

}