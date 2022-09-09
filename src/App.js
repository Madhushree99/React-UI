import React, { useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Button} from 'antd';

import TableData from './components/TableData';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';


 

function App() {

  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);

  const[show,setShow]=useState(false);
  
  
  const handleclick=event =>{
    setShow(current=>!current);
  }

  
  useEffect(()=>{
    const retrivedlist1=JSON.parse(localStorage.getItem('Tab1-data'))
    if(retrivedlist1)setdata1(retrivedlist1)
  },[])

  useEffect(()=>{
    const retrivedlist2=JSON.parse(localStorage.getItem('Tab2-data'))
    if(retrivedlist2)setdata2(retrivedlist2)
  },[])

  useEffect(()=>{
    const retrivedlist3=JSON.parse(localStorage.getItem('Tab3-data'))
    if(retrivedlist3)setdata3(retrivedlist3)
  },[])


  return (
    <>
    <div className='App'>
      <header className='App-header'>

          {/* <div className='space'>  <TabUi placeholder="Sample Tab"/> </div> */}

            <div className='space'> <Tab1 placeholder="Tab1" /> </div>
            <div className='space'> <Tab2 placeholder="Tab2" /> </div>
<           div className='space'> <Tab3 placeholder="Tab3" /> </div>


        <Button type="primary" className='btn' onClick={handleclick}>
          <span>Show Data</span>
        </Button>

      </header>
    </div>

    {show && (

   
      <div className='table'>
        
    <div>

      <TableData h1="Tab 1 Data"
        datasource={data1}>
        </TableData>
      
      </div>

      <div>
           
      <TableData h1="Tab 2 Data"
        datasource={data2}>
        </TableData>
      
      </div>

      <div>
    
      <TableData h1="Tab 3 Data"
        datasource={data3}>
        </TableData>
      
      </div>
      </div>
       )} 
      </>
  );
}

export default App;

