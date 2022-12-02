import axios from 'axios'
import { json } from 'react-router-dom'

const loginBaseUrl = `http://localhost:8080/api/alumni_edu/add_edu`

const Applicationlogin =  async(credentials) => {
  

// console.log(JSON.stringify(credentials) + "application cread")
// console.log(credentials)
const response = await axios.post(loginBaseUrl, credentials)
// const response = await axios.post(loginBaseUrl, [{}])
 
// console.log(response.data)
  return response.data

  // return { 'name': 'DEEPAK', 'lastName': 'aa','year': 52 }
  
}

const exportObject = { Applicationlogin }
export default exportObject