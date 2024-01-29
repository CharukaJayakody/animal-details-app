/// <summary>
///
///     File Name       - Spinner.jsx
///     Author          - Charuka Kasun
///     Date            - 28-01-2024
///     Description     -
///
///     -----------------------------------------------------------------------------------------
///     Current Version         Date            Developer                   Comments
///     -----------------------------------------------------------------------------------------
///     01.00.00              28-01-2024      Charuka Kasun          XXXXXXXXXXXXXXXXXXXX
/// </summary>
import React from 'react';
import PropagateLoader  from "react-spinners/PropagateLoader";

const Spinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div>
                <PropagateLoader  
                    color={"#164863"}
                    loading={true}
                    size={20}
                />
            </div>
        </div>
    )
}

export default Spinner 