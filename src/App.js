import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Button} from 'antd';

import TabUi from './components/TabUi';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
       
        <div className='space'> <TabUi placeholder="tab1"/> </div>
       <div className='space'>  <TabUi placeholder="tab2"/> </div>
       <div className='space'>  <TabUi placeholder="tab3"/> </div>
       
      <Button type="primary" className='btn'>
            <span>Done</span>
      </Button>  
      </header>

    </div>

  );
}

export default App;
