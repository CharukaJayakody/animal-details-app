/// <summary>
///
///     File Name       - useAPICaller.jsx
///     Author          - Charuka Kasun
///     Date            - 28-01-2024
///     Description     -
///
///     -----------------------------------------------------------------------------------------
///     Current Version         Date            Developer                   Comments
///     -----------------------------------------------------------------------------------------
///     01.00.00              28-01-2024      Charuka Kasun          XXXXXXXXXXXXXXXXXXXX
/// </summary>
import axios from 'axios';
import useAlerts from "./useAlerts";

const useAPICaller = () => {
    const fnAlerts = useAlerts();
    
    const fnAPICall = async (method,url,data) => {
        
        if(import.meta.env.VITE_APP_API_KEY === ""){
            fnAlerts("ERROR","Please add API key.");
            return fnAPICall;
        }
        try{
            const response = await axios({
                method: method,
                url: url,
                data: data,
                headers: {
                    'X-Api-Key': import.meta.env.VITE_APP_API_KEY, 
                  },
            });
            if(response.status === 200){
                return {status: true , data:response.data };
            }else{
                return {status: false , data:response };
            }
            
        }catch(error){
            fnAlerts("ERROR",error.message);
            return {status: false , data:error.message };
        }
    }

    return  fnAPICall;
}

export default useAPICaller