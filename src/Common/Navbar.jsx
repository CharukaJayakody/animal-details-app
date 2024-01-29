/// <summary>
///
///     File Name       - Navbar.jsx
///     Author          - Charuka Kasun
///     Date            - 28-01-2024
///     Description     -
///
///     -----------------------------------------------------------------------------------------
///     Current Version         Date            Developer                   Comments
///     -----------------------------------------------------------------------------------------
///     01.00.00              28-01-2024      Charuka Kasun          XXXXXXXXXXXXXXXXXXXX
/// </summary>
import React from 'react'
import {useState} from "react";
import useAlerts from "./useAlerts";

const Navbar = ({fnCallback}) => {
    const [strAnimalName,setStrAnimalName] = useState("");
    const fnAlerts = useAlerts();

    const fnSearch= ()=>{
        if(strAnimalName === ""){
            fnAlerts("WARNING","Enter something to search.");
        }else{
           fnCallback(strAnimalName);
        }
        
    }
    const fnOnKeyUp =(e)=>{
        let strValidValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');                       
        setStrAnimalName(strValidValue);
    }

    const fnOnKeyDown =(e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            fnSearch();
        }
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand">Animal Details</span>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <form className="d-flex ms-auto">
                        <input value={strAnimalName} onChange={e => setStrAnimalName(e.target.value)} className="form-control me-2" type="text" placeholder="Search" onKeyUp={fnOnKeyUp} onKeyDown={fnOnKeyDown}/>
                            <button className="btn btn-primary" type="button" onClick={fnSearch}>
                                Search
                            </button>
                        </form>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar