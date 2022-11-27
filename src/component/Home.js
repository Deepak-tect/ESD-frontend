import React from "react";
import { useState ,useEffect} from 'react';
import { Form,FormGroup,Label,Input,Col, CardHeader } from 'reactstrap';
// import ReactDOM from 'react-dom/client';
import { Button } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';



const Home = ({startLogin}) =>
{
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Year_passing, setPassingYear] = useState("");
  const [ID, setRoll] = useState("");
   

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      FirstName , LastName , Year_passing , ID
    }
    console.log({FirstName , LastName , Year_passing, ID})
  
    startLogin(credentials)

    

    setFirstName('');
    setLastName('');
    setPassingYear(''); 
    setRoll('');
  }

  
    
   return(
    <>
    
    <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            
      }}>
        <div class="card text-center">
        <div class="card-header" style={{backgroundColor: "#8EB3CA"}}>
            WELCOME
        </div>
        <div class="card-body" style={{backgroundColor:"#D4EBFA"}}>
          <h5 class="card-title">Login</h5>


          <Form onSubmit={handleSubmit} >


          <FormGroup row>
            <Label for="FirstName"sm={4} >
              Student ID
            </Label>
            <Col sm={10}>
            <Input
              id="ID"
              name="ID"
              placeholder="Student ID"
              type="text"
              backgroundColor = "#D4EBFA"
              value={ID}
              onChange = {(e) => setRoll(e.target.value)}
              />
            </Col>
            </FormGroup>
            
            
            <FormGroup row>
            <Label for="FirstName"sm={4} >
                First Name
            </Label>
            <Col sm={10}>
            <Input
              id="First_Name"
              name="FirstName"
              placeholder="First Name"
              type="text"
              backgroundColor = "#D4EBFA"
              value={FirstName}
              onChange = {(e) => setFirstName(e.target.value)}
              />
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label
              for="LastName"
              sm={4}
            >
              Last Name
            </Label>
            <Col sm={10}>
              <Input
                id="Last_Name"
                placeholder="Last Name"
                type="text"
                name="LastName"
                value={LastName}
                onChange = {(e) => setLastName(e.target.value)}
                
              />
            </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Year_passing" sm={4}>
                Year Of Passing
              </Label>
              <Col sm={10}>
              <Input
                id="Year_Passing"
                placeholder="Year Of Passing"
                type="number"
                name="Year_Passing"
                value={Year_passing}
                onChange = {(e) => setPassingYear(e.target.value)}
                
              />
            </Col>

            
            </FormGroup>

            <FormGroup rot>
            <Button> Submit </Button>
            </FormGroup>

            
          </Form>

      
    
    </div>
  
  </div>
    </div>



</>


  );
}

export default Home;