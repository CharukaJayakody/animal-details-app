
/// <summary>
///
///     File Name       - DetailCard.jsx
///     Author          - Charuka Kasun
///     Date            - 28-01-2024
///     Description     -
///
///     -----------------------------------------------------------------------------------------
///     Current Version         Date            Developer                   Comments
///     -----------------------------------------------------------------------------------------
///     01.00.00              28-01-2024      Charuka Kasun          XXXXXXXXXXXXXXXXXXXX
/// </summary>
import "../../index.css"

const DetailCard = ({animalObj}) => {
    
    const formatTxt =(strParam)=>{
        const strWordSet = strParam.split("_"); 
        return strWordSet.join(" "); 
    }

  return (
      <div className="card mb-3">
          <div className="card-header"><h3>Details of the {animalObj.name}</h3></div>
          <div className="card-body" style={{ maxHeight: "50vh", overflow: "scroll", overflowX: "hidden" }}>
              <div className="row ml-5">
                  <div className="col-12">
                      <span><b>Name</b> : {animalObj.name}</span>
                  </div>
              </div>
              <div className="row mt-3">
                  <div className="col-12">
                      <span><b>Locattion</b> :</span>
                      <ul>
                          {animalObj.locations.map(location => (
                              <li>{location}</li>
                          ))}
                      </ul>
                  </div>
              </div>
              <div className="row mt-2">
                  <div className="col-12">
                      <span><b>Characteristics</b> :</span>
                      <ul>
                          {Object.keys(animalObj.characteristics).map((key) => (
                              <li>
                                  <strong className="text-capitalize">{formatTxt(key)}:</strong> {animalObj.characteristics[key]}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DetailCard