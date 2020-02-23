import axios from 'axios';

const API_URL = 'https://randomuser.me/api/?results=1000&inc=name,gender,picture,location,email,phone';

const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response;
};

export default getContacts;
