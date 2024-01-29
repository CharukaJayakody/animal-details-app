/// <summary>
///
///     File Name       - SearchResults.jsx
///     Author          - Charuka Kasun
///     Date            - 28-01-2024
///     Description     -
///
///     -----------------------------------------------------------------------------------------
///     Current Version         Date            Developer                   Comments
///     -----------------------------------------------------------------------------------------
///     01.00.00              28-01-2024      Charuka Kasun          XXXXXXXXXXXXXXXXXXXX
/// </summary>
import Navbar from "../../Common/Navbar";
import {useState} from "react";
import Spinner from "../../Common/Spinner";
import DetailCard from "./DetailCard";
import useAlerts from "../../Common/useAlerts";
import useAPICaller from "../../Common/useAPICaller";

const SearchResults = () => {
    const [arrData,setArrData] = useState([])
    const [isLoad,setIsLoad] = useState(false);
    const fnAPICall = useAPICaller();
    const fnAlerts = useAlerts();

    const fnSearch = async (strAnimalName) => {
        setIsLoad(true);
        const res = await fnAPICall("GET", 'https://api.api-ninjas.com/v1/animals?name=' + strAnimalName);
        setIsLoad(false);

        if(res.status){
            if (res.data.length > 0) {
                setArrData(res.data);
            } else {
                setArrData([]);
                fnAlerts("WARNING", "No data found. ");
            }
        }
    }

    return (
        <>
            <Navbar fnCallback={fnSearch} />

            {isLoad ? <Spinner /> :

                <div className="container" style={{ marginTop: "10vh" }}>
                    {arrData.length > 0 ?
                        <>
                            <div className="row">
                                <div className="col-3 mb-2">
                                    <button className="btn btn-secondary" onClick={()=>setArrData([])}>Clear</button>
                                </div>
                            </div>
                            {arrData.map(val => (
                                <DetailCard animalObj={val} />
                            ))}
                        </>
                        :
                        <div className="rwo">
                            <div className="col-12">
                                <h3>Search animal names to see the details</h3>
                            </div>
                        </div>
                    }
                </div>
            }

        </>
    )
}

export default SearchResults