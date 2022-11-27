import axios from 'axios'

const loginBaseUrl = `http://localhost:8080/api/student`

const Applicationlogin =  async(credentials) => {
  


  
  // const response = await axios.post(loginBaseUrl, credentials)
  
 

  // return response.data
  return { 'name': 'DEEPAK', 'lastName': 'aa','year': 52 }
  
}

const exportObject = { Applicationlogin }
export default exportObject