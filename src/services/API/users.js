import axios from 'axios';

const contactsInstance = axios.create({
    baseURL: 'https://6400e1123779a862624eada3.mockapi.io/api/users',
  });
  export const getAllUsers = async () => {
    const response = await contactsInstance.get('/');
    // console.log(response);
    return response.data;
  };