import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button ,Switch } from 'reactstrap';

// import {useHistory} from "react-router-dom";

function Application({startLogin}) {

    // let history = useHistory();

    const [EducationField, setEducationField] = useState([
        { collegeName: '', degree: '', joiningYear: '', passingyear: '', address: '' }
    ])

    

    const handleFormChange = (event, index) => {
        let data = [...EducationField];
        data[index][event.target.name] = event.target.value
        setEducationField(data)
    }

    const addFields = () => {
        let object = {
            collegeName: '', degree: '', joiningYear: '', passingyear: '', address: ''
        }
        setEducationField([...EducationField, object])
    }


    const removeField = (index) => {
        let data = [...EducationField];
        data.splice(index,1)
        setEducationField(data)
    }

    // const Submit = () => {
    //     console.log(EducationField)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const credentials = {

            ...EducationField

         }
        //  for(var i = 0 ; i< EducationField.length ;i++){
        //     console.log(EducationField[i])
        //     console.log("hi")
            
        //  }
        
        console.log(...EducationField)
      
        startLogin(credentials)
    
        
    
        setEducationField(['']);
        
        ; 
      }



    return (
        <div >
            <form>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                   flexDirection : 'column',
                    // height: '100 vh'

                }}>
                    <h1 style={{color: 'white'}}>  EDUCATION DETAIL</h1>

                    {EducationField.map((form, index) => {
                        return (

                            <Form style={{ margin : '30px' ,  backgroundColor : '#f0f0f0' , borderRadius : '10px' , padding : '10px'}}
                            onSubmit={handleSubmit}>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="collegeName">
                                                College Name
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="collegeName"
                                                placeholder="Your School/College Name"
                                                type="text"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.collegeName}
                                            />
                                        </FormGroup>


                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="degree">
                                                Degree
                                            </Label>
                                            <Input
                                                id="degree"
                                                name="degree"
                                                placeholder="Enter Your Degree"
                                                type="text"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.degree}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="joiningYear">
                                                Year Of Joining
                                            </Label>
                                            <Input
                                                id="joiningYear"
                                                name="joiningYear"
                                                placeholder="Enter Your Joining Year"
                                                type="number"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.joiningYear}
                                            />
                                        </FormGroup>


                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="passingyear">
                                                Year Of Passing
                                            </Label>
                                            <Input
                                                id="passingyear"
                                                name="passingyear"
                                                placeholder="Enter Your Passing Year"
                                                type="number"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.passingyear}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>


                                <FormGroup>
                                    <Label for="exampleAddress">
                                        College Address
                                    </Label>
                                    <Input
                                        id="exampleAddress"
                                        name="address"
                                        placeholder="1234 Main St"
                                        onChange={event => handleFormChange(event, index)}
                                        value={form.address}
                                    />
                                </FormGroup>

                                <Row>
                                    <Col>
                                    <FormGroup check>
                                    <Input
                                        id="exampleCheck"
                                        name="check"
                                        type="checkbox"
                                        onClick={addFields}
                                    />
                                    <Label
                                        check
                                        for="exampleCheck"
                                    >
                                        Add
                                    </Label>
                                </FormGroup>

                                    </Col>
                                    
                                    <Col>
                                    <FormGroup check>
                                    <Input
                                        id="exampleCheck"
                                        name="uncheck"
                                        type="checkbox"
                                        onClick={() => removeField(index)}
                                    />
                                    <Label
                                        check
                                        for="exampleCheckk"
                                    >
                                        Remove
                                    </Label>
                                </FormGroup>
                                        
                                    </Col>
                                </Row>
                                
                                

                            </Form>
                        )
                    })
                    }
                    
                </div>

            

                <div >

                        <Button onClick={handleSubmit} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    left : '50%',
                    top : 'center'


                    
                }} >
                            Submit
                        </Button>

                </div>



                




            </form>



        </div>
    );
}

export default Application;