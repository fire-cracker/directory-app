import axios from 'axios';

const API_URL= 'https://randomuser.me/api/?results=100&inc=name,gender,picture,location,email,phone'

const getContacts = async()  => {
  try {
    const response = await axios.get(`${API_URL}`)
    return response
  }catch (error) {
    console.log(error)
    return error('Could not fetchData', error);
  }
}


export default getContacts