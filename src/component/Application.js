import React, { useState,useEffect } from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button ,Switch } from 'reactstrap';
import axios from "axios";
// import {useHistory} from "react-router-dom";

function Application({startLogin , user}) {

    // let history = useHistory();

    const [EducationField, setEducationField] = useState([
        { college_name: '', degree: '', joining_year: '', passing_year: '', address: '' ,alumni: ''}
    ])

    const [alumni , setTemp] = useState('')
    const [arr ,setArr] = useState([])

    useEffect(() =>{
        const fetchList = async() =>{
        console.log("useEffect")
        console.log(user)

        const response = await axios.post('http://localhost:8080/api/alumni/getAlumniId', user)
        const newData = response.data
        console.log(response.data + " resonse.data")
        console.log(newData + "newData")
        setTemp(newData)
        // setEducationField.alumni_org_id(newData)
        } ;
        fetchList();
     },[])

    

    const handleFormChange = (event, index) => {
        let data = [...EducationField];
        data[index]["alumni"] = alumni
        data[index][event.target.name] = event.target.value
        setEducationField(data)
    }

    const addFields = () => {
        let object = {
            college_name: '', degree: '', joining_year: '', passing_year: '', address: ''
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
    
        const credentials = []

         for(var i = 0 ; i< EducationField.length ;i++){
            // console.log(EducationField[i])
            // console.log("hi")
            credentials.push(EducationField[i])
         }
        
        // console.log(EducationField)
        // console.log(alumni + "check alumni")
      
        startLogin(credentials)
    
        
    
        setEducationField([''])
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
                                            <Label for="college_name">
                                                College Name
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="college_name"
                                                placeholder="Your School/College Name"
                                                type="text"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.college_name}
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
                                            <Label for="joining_year">
                                                Year Of Joining
                                            </Label>
                                            <Input
                                                id="joining_year"
                                                name="joining_year"
                                                placeholder="Enter Your Joining Year"
                                                type="number"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.joining_year}
                                            />
                                        </FormGroup>


                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="passing_year">
                                                Year Of Passing
                                            </Label>
                                            <Input
                                                id="passing_year"
                                                name="passing_year"
                                                placeholder="Enter Your Passing Year"
                                                type="number"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.passing_year}
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