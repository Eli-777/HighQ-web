import React from 'react';

import './adminTable.style.scss'

function AdminTable({ children, tableTitles }) {
  return (
    <div className="adminTable admin-margin">
      <table>
        <thead>
          <tr>
            {
              tableTitles.map((tableTitle, index) => {
                return <th key={index}>{tableTitle}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;