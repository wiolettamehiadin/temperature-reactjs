import React from 'react';
import './TableList.css';


function TableList(props) {

    let tableList = props.tableList;
    let tableElements = tableList.map((newTableObj) => {


        return(
            <div className="Row">
            <div className="Column">
              <table key={newTableObj}>
                <tr>
                  <th className="City">{tableList.stacja}</th>
                </tr>
                <tr>
                  <td className="Temperature">Temperatura: {tableList.temperatura}</td>
                </tr>
                <tr>
                <td className="Humidity">Wilgotnosc wzgledna: {tableList.wilgotnosc_wzgledna}</td>
                </tr>
                <tr>
                  <td className="Pressure">Cisnienie: {tableList.cisnienie}</td>
                </tr>
              </table>
            </div>
          </div>
        );
    });

    return(
        {tableElements}
    )
  
}

export default TableList;