import axios from 'axios'

// The API endpoint where login data is sent to
const loginBaseUrl = `http://localhost:8080/api/student/login`

const Orglogin =  async(credentials) => {
  


  
  // const response = await axios.post(loginBaseUrl, credentials)
  
 

  // return response.data
   return { 'name': 'DEEPAK', 'lastName': 'aa','year': 52 }
  
}

const exportObject = { Orglogin }
export default exportObject