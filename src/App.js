import './App.css';
import Home from "./component/Home";
import { useState, useEffect} from 'react';
import loginService from './service/login';
import Applicationlo from './service/ApplicationSer';
import OrgService from './service/orgServic'


import { ToastContainer, toast } from 'react-toastify';

// import { BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   BrowserRouter,
//   Switch,
//   Link ,
//   Redirect} from "react-router-dom";

import Notification from './component/Notification';
import Application from './component/Application'
import Organisation from './component/Organisation';
import Alumni from './component/Alumni'
import ALumniSer from './service/Alumnilogin'
import {  Button  } from 'reactstrap';



const App = () => 
{

  const [ user, setUser ] = useState(null)
  const [alu , setAlu] =    useState(null)
  const [ Edu, setEdu ] = useState(null)
  const [ org, setorg ] = useState(null)
  // const [ notification, setNotification ] = useState(null)
  // const [ notificationType, setNotificationType ] = useState(null)


  const handleLogin =  async (credentials) => {
    try {
      // console.log("inside final handlelogin1");
      // console.log(credentials + "creds from handleLogin")
      const userObject = await loginService.login(credentials)
      // console.log("inside final handlelogin2");
      setUser(userObject)
      // console.log("inside final handlelogin3");
      setAlu(userObject)
      // console.log("inside final handlelogin4");
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject)) 
      toast("LOGIN SUCCESSFULLY")
      
      
    }
    catch (exception) {
      toast("Log in failed, check username and password entered")
      // notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  const handleAlumni =  async (credentials) => {
    try {
      console.log("inside final handlelogin1");
      console.log(credentials + "creds from handleAlumni")
      const userObject = await ALumniSer.Alumnilogin(credentials)
      console.log("inside final handleALumni2");
      // setUser(userObject)
      setAlu(null)
      setorg(userObject)
      console.log("inside final handleALumni3");
      // setAlu(userObject)
      console.log("inside final handleALumni4");
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject)) 
      toast("LOGIN SUCCESSFULLY")
      
      
    }
    catch (exception) {
      toast("Log in failed, check username and password entered")
      // notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  const handleSubmit =  async (credentials) => {
    try {
      const userObject = await Applicationlo.Applicationlogin(credentials)
      setEdu(userObject)
      setorg(null)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject)) 
      toast("EDUCATION DETAIL ADDED SUCCESSFULLY")
      // notificationHandler(`successfully Added Education as ${userObject.firstName}`, 'success')
      
    }
    catch (exception) {
      toast("ENTER THE EDUCATION DETAIL")
      // notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }
  const handleSubmitOrg =  async (credentials) => {
    try {
      const userObject = await OrgService.Orglogin(credentials)
      // setUser(userObject)
      toast("ORGANISATION DETAIL ADDED SUCCESSFULLY")
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject)) 
      // notificationHandler(`successfully Added Education as ${userObject.firstName}`, 'success')
      
    }
    catch (exception) {
      toast("ENTER THE ORGANISATION DETAIL")
      // notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }
  

  // const notificationHandler = (message, type) => {
  //   setNotification(message)
  //   setNotificationType(type)

  //   setTimeout(() => {
  //     setNotificationType(null)
  //     setNotification(null)
  //   }, 3000)
  // }

//   function submitForms(){
//     document.forms["Application.js"].submit();
//     document.forms["Organisation.js"].submit();
//     console.log([])
// }

  

  return (
    

    <div className="GeeksForGeeks">
      <ToastContainer />
    {/* <Notification notification={notification} type={notificationType} /> */}
    {
    user === null && <Home startLogin = {handleLogin} />
    }
    {
       user !== null && alu !==null && <Alumni startLogin = {handleAlumni} user={user}/>
    }
    {
      user !== null && org !==null && <Application startLogin = {handleSubmit} user={user}/>
    
    }
    {
      org ===null && Edu !== null && <Organisation startLogin = {handleSubmitOrg} user={user}/>
    }



    {/* <BrowserRouter>
      <Routes>
        <Route path='/component/O`rganisation' element={
          <Organisation startLogin = {
            () => handleSubmitOrg()
            }>
          </Organisation>} />
          
        </Routes>
    </BrowserRouter>    */}
    




    </div>
  );
}

export default App;
