import axios,  {AxiosResponse } from 'axios';

export interface LoginData {
    email: string;
    password: string;
}


export const login = async (loginData: LoginData): Promise<AxiosResponse> => {
    const url = 'http://restapi.adequateshop.com/api/authaccount/login';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const data = loginData;
    
    const response = await axios.post(url, data, { headers });
  
    return response;
};