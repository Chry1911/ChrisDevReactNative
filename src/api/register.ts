import axios,  {AxiosResponse } from 'axios';

export interface RegistrationData {
    name : string;
    email: string;
    password: string;
    // add any other required fields here
}

export const register = async (registrationData: RegistrationData): Promise<AxiosResponse> => {
    const url = 'http://restapi.adequateshop.com/api/authaccount/registration';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const data = registrationData;
    
    const response = await axios.post(url, data, { headers });
  
    return response;
};

