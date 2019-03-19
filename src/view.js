import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from "./menu";
import EnhancedTable from "./table";


class View extends React.Component{
    render(){
        return (
            <div>
                <Menu />
                <EnhancedTable />
            </div>
        )

    }

}
export default View;