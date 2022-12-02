import axios from 'axios'

// The API endpoint where login data is sent to
const loginBaseUrl = `http://localhost:8080/api/alumni/add`
// const loginBaseUrl = `https://cors-anywhere.herokuapp.com/localhost:8080/api/student/get`

const Alumnilogin =  async(credentials) => {

  // console.log("in axios top")
  // console.log(credentials + "alumni creds")
  // console.log()
  const response = await axios.post(loginBaseUrl, credentials)
  // console.log("in axios bottom")

  // console.log(response.data);
  return response.data

    //  return { 'name': 'DEEPAK', 'lastName': 'aa','year': 52 }
  
}

const exportObject = { Alumnilogin }
export default exportObject