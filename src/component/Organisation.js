import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button  } from 'reactstrap';

function Organisation({startLogin}) {

    const [organisationField, setOrganisationField] = useState([
        { organisationName: '', EmpID: '' , yearOfJoining:'', leavingYear:'', position:''}
    ])

    // const [name, setName] = useState("")

    // const [data, setData] = useState([{name: ""}, {name: "Amazon"}, {name: ""}])

    // const [list, setList] = useState([])

    // const fetchList = async() => {
    //     const response = await axios.get("http://localhost:8000/company/list");
    //     setList(response.data);
    // }

    // const [companyName , setCompanyName] = useState("")


    const [companyList , setCompanyList] = useState([{'name':" ",'id':" "}])
     useEffect(() =>{
        const fetchList = async() =>{
        // const response = await axios(" ");

        // transform 
        const response = [{
            "name": "Steve",
            "id": 43    
        },{
            "name": "john",
            "id": 43    
        },{
            "name": "Deepak",
            "id": 43    
        },{
            "name": "lone",
            "id": 43    
        }   ]

        const newData = response
        // const newData = response.data
        setCompanyList(newData);
        } ;
        fetchList();
     },[])

    //  const DropDown = ({i}) => {
    //     <select>
    //         {
    //             list.map(l => <option onClick={(e) => handleDrop(e, i)}>{l}</option>)
    //         }
    //     </select>
    // }

    // const handleDrop = (e, i) => {
    //     const value = e.target.value;
    //     const content = data;
    //     content[i].name = value;
    //     setData(content);
            
    // }

    //


    //organisationField[i].orgname

    const handleFormChange = (event, index) => {
        let data = [...organisationField];
        // let id
        // for(let i=0;i<companyList.length;i++){
        //     if(companyList[i].name === event.target.value){
        //         id = companyList[i].id;
        //     }
        // }
        // if(id !== null){
        //     data[index]['organisationID'] = id;
        // }
        data[index][event.target.name] = event.target.value
        setOrganisationField(data)
    }

    const addFields = () => {
        let object = {
            organisationName: '', EmpID: '' , yearOfJoining:'', leavingYear:'', position:''
        }
        setOrganisationField([...organisationField, object])
    }

    const removeField = (index) => {
        let data = [...organisationField];
        data.splice(index,1)
        setOrganisationField(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const credentials = {
            ...organisationField

         }
        console.log(...organisationField)
      
        startLogin(credentials)
    
        
    
        setOrganisationField(['']);
        ; 
      }



    return (
        <>
            <form onSubmit={handleSubmit} >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection : 'column',
                    

                }}>
                    <h1 style={{color: 'white'}}>  ORGANISATION DETAIL</h1>

                    {organisationField.map((form, index) => {
                        return (

                            <Form style={{ margin : '30px' ,  backgroundColor : '#f0f0f0' , borderRadius : '10px' , padding : '10px'}}
                            onSubmit={handleSubmit}>

                                <Row>
                                    <Col md={6}>
                                        {/* <FormGroup> */}
                                            {/* <Label for="OrganisationName">
                                                Organisation Name
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="organisationName"
                                                placeholder="Your Organisation Name"
                                                type="text"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.OrganisationName}
                                                
                                            /> */}
                                            {/* <Label for="OrganisationName">
                                                Organisation Name
                                            </Label>
                                           
                                            <Input
                                                bsSize="sm"
                                                className="mb-3"
                                                type="select"
                                                onChange={event => handleFormChange(event, index)}
                                            >
                                                
                                                
                                                {
                                                    companyList.map(company =>(
                                                        <option value={company.name} key={company.id}>
                                                            {company.name}
                                                        </option>
                                                    ))
                                                }
                                            </Input> */}
                                        {/* </FormGroup> */}

                                                <FormGroup>
                                                    <Label for="EmpID">
                                                        Company Name
                                                    </Label>
                                                    <Input bsSize="sm" className="mb-3" type="select" name="organisationName" onChange={event => handleFormChange(event, index)}
                                                    value={form.organisationName} >
                                                        {/* <option> nhs</option>
                                                        <option> nhs</option>
                                                        <option> nhs</option> */}

                                                        {

                                                            companyList && companyList.map((companyList,index) =>(
                                                                <option value={companyList.name} name="organisationName" key={companyList.id}>
                                                                        {companyList.name}
                                                                    </option>
                                                            ))
                                                        }
                                                           
                                                        
                                                        
                                                        
                                                    
                                                    
                                                    
                                               
         
                                                    </Input>
                                                </FormGroup>

                                            </Col>
                                            
                                            <Col md={6}>
                                                <FormGroup>
                                                <Label for="EmpID">
                                                    Employee ID
                                                </Label>
                                                <Input
                                                    id="EmpID"
                                                    name="EmpID"
                                                    placeholder="Enter yor Employee ID"
                                                    onChange={event => handleFormChange(event, index)}
                                                    value={form.EmpID}
                                                />
                                                </FormGroup>
                                            </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="yearOfJoining">
                                                Year Of Joining
                                            </Label>
                                            <Input
                                                id="yearOfJoining"
                                                name="yearOfJoining"
                                                placeholder="Enter Your Joining Year"
                                                type="number"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.yearOfJoining}
                                            />
                                        </FormGroup>


                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="Leaningyear">
                                                Year Of Leaving
                                            </Label>
                                            <Input
                                                id="leavingYear"
                                                name="leavingYear"
                                                placeholder="Enter Your Leaving Year"
                                                type="number"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.leavingYear}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                <FormGroup check>
                                    <Label for="position">
                                                Postion
                                            </Label>
                                            <Input
                                                id="position"
                                                name="position"
                                                placeholder="Enter Your Position"
                                                type="text"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.position}
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
                                        name="check"
                                        type="checkbox"
                                        onClick={() => removeField(index)}
                                    />
                                    <Label
                                        check
                                        for="exampleCheck"
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
                    top : 'center'}} >
                            Submit
                        
                        </Button>
                </div>
            </form>
        </>
    );
}

export default Organisation;