import * as React from 'react';
import {
    GridComponent,
 Filter, Inject, Sort,
    ExcelExport, Toolbar,  Page,Edit
} from '@syncfusion/ej2-react-grids';

const GenericGrid = ({
    dataSource,
    gridColumns,
    gridPageSize,
    isGridPaging,
    isGridSortable,
    isGridFilterable,
    onSelectionChange,
    isGridHoverable,
    id,
    toolbar,
    toolbarClick,
    allowExcelExport,
    editOptions
}) => {

    function toolbarClick1(ClickEventArgs){
        //Not working
        if(ClickEventArgs.item.text==="Excel Export"){
            test.current.excelExport();
        }
 
    }
    const test = React.useRef(null);
  
    return (<div className='control-pane'>
        <div className='control-section'>
            <GridComponent ref={test}
                dataSource={dataSource}
                enableHover={isGridHoverable}
                allowFiltering={isGridFilterable}
                allowSelection={onSelectionChange}
                allowSorting={isGridSortable}
                id={id}
                allowPaging={isGridPaging} 
                columns={gridColumns}
                toolbar={toolbar} 
                toolbarClick={toolbarClick}
                allowExcelExport={allowExcelExport}
                editSettings={editOptions} >
                {
                    <Inject services={[Sort, Filter, Toolbar, ExcelExport, Page,Edit]} />
                }

            </GridComponent>
        </div>
    </div>
    );
}

export default GenericGrid;