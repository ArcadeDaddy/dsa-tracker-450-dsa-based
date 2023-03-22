import React from 'react';
import data from '../../services/data/data';

function TableX() {


  return (
    <div className="mainTable">
       
      <table>
		<tr>
        <th>check</th>
		<th>Topic</th>
        <th>Problem</th>
        
		</tr>
		{data.map((val, key) => {
		return (
            <tr>
                <td>{<input type="checkbox" id={key}/>}</td>
                <td>{val.Topic}</td>
                <td><a href={val.URL} target="_blank">{val.Problem}</a></td>
            </tr>
        )
		})}
	</table>
      </div>
  )
}

export default TableX;

