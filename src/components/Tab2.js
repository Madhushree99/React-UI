import React, { useState} from 'react';
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input,Space, Button,Select, Form } from 'antd';

const { TextArea } = Input;


const Tab2 = (props) => {
  

  const [Tab2, setTab2] = useState([
      {firstname:'', lastname:'', address:'', contact:''},
  ]);
 

  const [open, setopen] = useState(false);
  
  const LocalKey="Tab2-data";
 
  const handlecontrolRemove = (index) => {
    const list = [...Tab2];
    list.splice(index, 1);
    setTab2(list);
  }; 


  const handlecontrolAdd = () => {
    setTab2([...Tab2, {firstname:'',lastname:'',address:'',contact:''}]);
    
  };

  const handleChange = (index,e) => {
       const inputdata=[...Tab2]
       inputdata[index][e.target.name]=e.target.value;
       setTab2(inputdata);
  };

  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Tab2data",Tab2);
      const inputdata=[...Tab2]
       setTab2(inputdata);
       localStorage.setItem(LocalKey, JSON.stringify(Tab2))
        setopen(false)
        window.location.reload(false);
  };


  return (
      <>
         <Space 
          direction="vertical"
          style={{
            width: '100%',
          }} >

         <div>
           <Form onFinish={handleSubmit}>
       
        <Select 
             style={{ width: 600}}
             placeholder={props.placeholder}
             open={open}
             onDropdownVisibleChange={(visible) => setopen(visible)}
             dropdownRender={() => (
            <>
          
          
                {Tab2.map((controlsLst,index) => (
              <>
                 
        <div key={index}>
          <Space 
              style={{
              padding: '0 8px 4px',
              width:'800'
            }}>

           
           <Input
              placeholder="First Name"
              name="firstname"
              type="text"
              id="firstname"
              value={controlsLst.firstname}
              onChange={e=>handleChange(index,e)}
              required
              rules={[
                {
                  required: true,
                  message: 'First Name is required',
                },
              ]}
             />

            <Input
              placeholder="Last Name"
              name="lastname"
              type="text"
              id="lastname"
              value={controlsLst.lastname}
              onChange={e=>handleChange(index,e)}
              required
              rules={[
                {
                  required: true,
                  message: 'Last Name is required',
                },
              ]}
             />   
 
 
            <Input
              placeholder="Contact"
              name="contact"
              id="contact"
              maxLength={10}
              minLength={10}
              value={controlsLst.contact}
              onChange={e=>handleChange(index,e)}
              required
              rules={[
                {
                  required: true,
                  message: 'Contact info required',
                },
              ]}
             />   

             
            <TextArea
              name="address"
              id="address"
             rows={3} 
            placeholder="Enter Your Full Address" 
            maxLength={50}
            value={controlsLst.address}
            onChange={e=>handleChange(index,e)}
            rules={[
              {
                required: true,
                message: 'Address info required',
              },
            ]}
             />

 
 
                {Tab2.length !== 1 && (
                         <Button 
                           type="danger"
                           onClick={() => handlecontrolRemove(index)}
                         >
                           <span>Remove</span>
                         </Button>
                       )}

</Space>
           
        </div>          
        </>
         ))}
         <>
                   <Divider style={{ margin: '8px 0' }} />
                   
                   <Space  
                   style={{
                  padding: '0 8px 4px',
                     }}>

                       {Tab2.length < 4 && (

                       <Button
                         type="primary"
                         onClick={handlecontrolAdd}
                         className="btn2"
                       >
                         <span>Add more <PlusOutlined /></span>
                       </Button>

                        )} 

                       <Button type="primary" className="btn2" htmlType='submit' onClick={handleSubmit}>
                         <span>Submit</span>
                       </Button>
                     </Space>
                     
                     </>
                     </>
       
       )}    
     >
     </Select>
    </Form> 
    </div>

</Space>
    </>
  );
};

export default Tab2; 

