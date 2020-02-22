import axios from 'axios';

const {API_URL} = process.env

const getContacts = async()  => {
  try {
    const response = await axios.get(`${API_URL}`)
    return response
  }catch (error) {
    return error('Could not fetchData', error);
  }
}


export default getContacts