import React, { useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import { Divider,Space, Table} from 'antd';



const TableData = (props) => {


const columns=[
    {
      key:'1',
      title:"First Name",
      dataIndex:'firstname'
    },
    {
      key:'2',
      title:"Last Name",
      dataIndex:'lastname'
    },
    {
      key:'3',
      title:"Contact",
      dataIndex:'contact'
    },
    {
      key:'4',
      title:"Address",
      dataIndex:'address'
    },
  ]


  return(
    <>
    <Divider style={{ margin: '8px 0' }} />
    <h3>{props.h1}</h3>
    <Divider style={{ margin: '8px 0' }} />
    <Table
          columns={columns}
          dataSource={props.datasource}>
      </Table>
    </>
    )
}
  export default TableData; 

