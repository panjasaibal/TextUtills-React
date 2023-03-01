
import './App.css';
import About from './components/About';
import MyTextForms from './components/MyTextForms';

import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null) ;

  const toogle = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("darkmode enebled successfully", 'success')
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("darkmode disabled successfully", 'success')
    }
      
  }

  var showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null)
      }, 1600);
  }
  return (
    <>
  
    <Router>
    <Navbar name="Textutills" mode={mode} toggle={toogle}/>
      <Alerts alert= {alert}/>
      <div className='container my-4'>
        <Routes>
          <Route path='/about' element={<About mode={mode} />}></Route>
          <Route path='' element={<MyTextForms heading="Enter some texts" mode={mode} showAlert={showAlert}/>}></Route>

        </Routes>
          
          {/*<About/>*/}
      </div>
    </Router>
   
    
    </>
  );
}

export default App;
