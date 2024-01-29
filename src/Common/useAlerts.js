/// <summary>
///
///     File Name       - useAlerts.jsx
///     Author          - Charuka Kasun
///     Date            - 28-01-2024
///     Description     - 
///
///     -----------------------------------------------------------------------------------------
///     Current Version         Date            Developer                   Comments
///     -----------------------------------------------------------------------------------------
///     01.00.00              28-01-2024      Charuka Kasun          XXXXXXXXXXXXXXXXXXXX
/// </summary>
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const useAlerts = () => {

    const fnAlert =(strTyp,strMsg)=>{
        let strType = strTyp.toUpperCase();
        switch(strType){
            case 'SUCCESS':
                toast.success(strMsg, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                break;
            
            case 'ERROR':
                toast.error(strMsg, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                break;

            case 'WARNING':
                toast.warn(strMsg, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                break;
            default:
                break;
        }
    }

    return fnAlert;
}

export default useAlerts