import React from 'react';
import "../../style/assetsTable.css";
import Table from 'react-bootstrap/Table';

function DisplayAssets() {
  return (
    
    <div >
      
      
      <h2><center>Display Assets</center></h2>
       
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Asset ID</th>
          <th>Asset Name</th>
          <th>Asset Image</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0001</td>
          <td>Bunk bed</td>
          <td></td>
          
        </tr>
        <tr>
          <td>0002</td>
          <td>Bunk bed</td>
          <td></td>
          
        </tr>
        <tr>
          <td>0003</td>
          <td>Table</td>
          <td></td>
        </tr>
        <tr>
          <td>0004</td>
          <td>Table</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
 
    
    </div>

    
  );
}



export default DisplayAssets;
