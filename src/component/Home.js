import React from "react";
import { useState ,useEffect} from 'react';
import { Form,FormGroup,Label,Input,Col, CardHeader } from 'reactstrap';
// import ReactDOM from 'react-dom/client';
import { Button } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';



const Home = ({startLogin})=>
{
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [graduation_year, setPassingYear] = useState("");
  const [roll_number, setRoll] = useState("");
   

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      first_name , last_name , graduation_year , roll_number
    }
    // console.log(first_name , last_name , graduation_year, roll_number)
    // console.log(credentials)
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
            <Label for="first_name"sm={4} >
              Student roll_number
            </Label>
            <Col sm={10}>
            <Input
              id="roll_number"
              name="roll_number"
              placeholder="Student roll_number"
              type="text"
              backgroundColor = "#D4EBFA"
              value={roll_number}
              onChange = {(e) => setRoll(e.target.value)}
              />
            </Col>
            </FormGroup>
            
            
            <FormGroup row>
            <Label for="first_name"sm={4} >
                First Name
            </Label>
            <Col sm={10}>
            <Input
              id="First_Name"
              name="first_name"
              placeholder="First Name"
              type="text"
              backgroundColor = "#D4EBFA"
              value={first_name}
              onChange = {(e) => setFirstName(e.target.value)}
              />
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label
              for="last_name"
              sm={4}
            >
              Last Name
            </Label>
            <Col sm={10}>
              <Input
                id="Last_Name"
                placeholder="Last Name"
                type="text"
                name="last_name"
                value={last_name}
                onChange = {(e) => setLastName(e.target.value)}
                
              />
            </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="graduation_year" sm={4}>
                Year Of Passing
              </Label>
              <Col sm={10}>
              <Input
                id="graduation_year"
                placeholder="Year Of Passing"
                type="number"
                name="graduation_year"
                value={graduation_year}
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