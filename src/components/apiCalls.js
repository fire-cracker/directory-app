import axios from 'axios';

const API_URL= process.env.API_URL

const getContacts = async()  => {
  const response = await axios.get(`${API_URL}`)
  return response
}


export default getContacts