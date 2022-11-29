import React from "react";
import { useState ,useEffect} from 'react';
import { Form,FormGroup,Label,Input,Col, CardHeader } from 'reactstrap';
// import ReactDOM from 'react-dom/client';
import { Button } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';



const Alumni = ({startLogin})=>
{
  const [email, setEmail] = useState("");
  const [contact_number, setcontact] = useState("");

   

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
        email , contact_number 
    }
    console.log(email , contact_number)
    console.log(credentials)
    startLogin(credentials)

    

    setEmail('');
    setcontact('');
    
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
        {/* <div class="card-header" style={{backgroundColor: "#8EB3CA"}}>
            WELCOME
        </div> */}
        <div class="card-body" style={{backgroundColor:"#D4EBFA"}}>
          {/* <h5 class="card-title">Login</h5> */}


          <Form onSubmit={handleSubmit} >


          <FormGroup row>
            <Label for="email"sm={4} >
              Student Email
            </Label>
            <Col sm={10}>
            <Input
              id="email"
              name="email"
              placeholder="Enter Email"
              type="text"
              backgroundColor = "#D4EBFA"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
              />
            </Col>
            </FormGroup>
            
            
            <FormGroup row>
            <Label for="contact_number"sm={4} >
                Contact number 
            </Label>
            <Col sm={10}>
            <Input
              id="contact_number"
              name="contact_number"
              placeholder="contact_number Name"
              type="text"
              backgroundColor = "#D4EBFA"
              value={contact_number}
              onChange = {(e) => setcontact(e.target.value)}
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

export default Alumni;