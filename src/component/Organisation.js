// https://github.com/NirajGujarathi/OAES_QuestionBank/blob/microservice/frontend/src/components/ItemForm.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button  } from 'reactstrap';

//const [ selectedCourse, setSelectedCourse ] = useState(-1)


// const handleSelectCourse = (event) => {
//     const courseIdx = event.target.value
//     // Set selectedCourse option so that its displayed to the user on the frontend
//     setSelectedCourse(courseIdx)
//   }

{/* <div className='form-group'>
        <label>
          Select Course: <br/>
          {/* Select Drop Down for choosing Course of the Item being added */}
    //       <select 
    //         className='form-select p-2 regular-shadow rounded-lg'
    //         value={selectedCourse}
    //         onChange={handleSelectCourse}
    //       >
    //         <option value={-1}>Select a Course</option>
    //         {
    //           courses.map((c, idx) => 
    //             <option key={c.courseId} value={idx}>{c.name}</option>
    //           )
    //         }
    //       </select>
    //     </label>
    //     </div> 
    // */}

function Organisation({startLogin,user}) {

    const [organisationField, setOrganisationField] = useState([
        { organisationName: '' , joining_year:'', leaving_year:'', position:'',alumni: '',organisation:''}
    ])
    //organisationName:''

    const [alumni , setTemp] = useState('')

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
        const response = await axios("http://localhost:8080/api/organisation/get_all");

        // transform 
        // const response = [{
        //     "name": "Steve",
        //     "id": 43    
        // },{
        //     "name": "john",
        //     "id": 43    
        // },{
        //     "name": "Deepak",
        //     "id": 43    
        // },{
        //     "name": "lone",
        //     "id": 43    
        // }   ]

        // const newData = response


        const newData = response.data
        setCompanyList(newData);
        } ;
        fetchList();
     },[])

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

    //  useEffect(() =>{
    //     const fetchList = async() =>{
    //     console.log("useEffect")
    //     console.log(user)

    //     const response = await axios.get(`${}?=${}`)
    //     // const newData = response.data
    //     // console.log(response.data + " resonse.data")
    //     // console.log(newData + "newData")
    //     // setTemp(newData)
    
    //     } ;
    //     fetchList();
    //  },[])





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

    const handleFormChange = async(event, index) => {
        let data = [...organisationField];
        let id
        for(let i=0;i<companyList.length;i++){
            if(companyList[i].name === event.target.value){
                console.log(JSON.stringify(companyList[i]) + "compam list");
                id = JSON.stringify( companyList[i].org_id);
                data[index]['organisation'] = companyList[i];
                // console.log(id + "id")
                break
            }
        }
        // for(let i=0 ; i<companyList.length;i++){
        //     if(id !== null && companyList[i].org_id === id ){
        //         console.log(companyList[i] + "iddddd")
        //         data[index]['organisation'] = companyList[i];
        //         break
        //     } 
        // }
        
        // const burl='http://localhost:8080/api/organisation/getOrg'
        // const response = await axios.get(`${burl}?name=${event.target[}`)
        // const newData = response.data
        // data[index]["organisation"] = newData
        data[index]["alumni"] = alumni
        data[index][event.target.name] = event.target.value
        setOrganisationField(data)
    }

    const addFields = () => {
        let object = {
            organisationName: '', EmpID: '' , joining_year:'', leaving_year:'', position:''
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

        const credentials = []

         for(var i = 0 ; i< organisationField.length ;i++){
            // console.log(EducationField[i])
            // console.log("hi")
            // console.log(JSON.stringify(organisationField[i]) + "iiiiiiiiiii")
            // if(JSON.stringify(organisationField[i]) === "organisationName"){
            //     continue;
            // }
            // for(let i=0;i<x.length;i++) {
            //     y.push({
            //         a: x[i].a,
            //         b: x[i].b,
            //         c: x[i].c
            //     })
            // }

            credentials.push({
                joining_year: organisationField[i].joining_year,
                leaving_year: organisationField[i].leaving_year,
                position: organisationField[i].position,
                organisation: organisationField[i].organisation,
                alumni:organisationField[i].alumni,
            })
         }
        //  delete credentials["organisationName"]
        // const credentials = {
        //     ...organisationField

        //  }
        // const y = []
        // for(const f of organizationField) {
        //     y.push({joining_year: f.joinjng year, leaving_year: f.leaving_year, position: f.position})
        console.log(credentials)
      
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
                                                    <Input bsSize="bm" className="mb-3" type="select" name="organisationName" onChange={event => handleFormChange(event, index)}
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
                                            {/* <Col md={6}>
                                                <button> Submit </button>
                                            </Col> */}

                                            
                                            {/* <Col md={6}>
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
                                            </Col> */}
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
                                            <Label for="Leaningyear">
                                                Year Of Leaving
                                            </Label>
                                            <Input
                                                id="leaving_year"
                                                name="leaving_year"
                                                placeholder="Enter Your Leaving Year"
                                                type="number"
                                                onChange={event => handleFormChange(event, index)}
                                                value={form.leaving_year}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                <FormGroup>
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