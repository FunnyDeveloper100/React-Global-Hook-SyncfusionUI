import GenericGrid from './GenericGrid';
import * as React from 'react';
import { data } from './datasource';
import { useState, useEffect } from 'react';
import useGlobal from '../store';

function App(props) {
    const [globalState, globalActions] = useGlobal();
    console.log(globalState.grid_data)
    const toolbar = ['ExcelExport', 'Search','Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };

    const columns=[ 
        { field: 'OrderID', headerText: 'Order ID', width: 120, type: 'number', editType:"numericedit" }, 
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string', bllowFiltering:false }, 
        { field: 'ShipCity', width: 140, headerText: 'Ship City', type: 'string' }, 
        { field: 'OrderDate', width: 140, headerText: 'Order Date', type: 'date',format:'yMd', editType:"datetimepickeredit" } 
    ]; 

    const testRef = React.useRef(null);

    return <GenericGrid dataSource={globalState.grid_data}  ref={testRef}
        gridColumns={columns}
        gridPageSize={5}
        id='ExcelExport'
        toolbar={toolbar}
        //toolbarClick={toolbarClick}
        isGridPaging="true"
        isGridFilterable="true"
        allowExcelExport="true"
        editOptions={editOptions}></GenericGrid>
};
export default App;

