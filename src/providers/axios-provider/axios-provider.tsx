import { FC } from 'react';
import { AxiosProviderProps } from './axios-provider.interface';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['API-Key'] = process.env.REACT_APP_API_TOKEN;

export const AxiosProvider: FC<AxiosProviderProps> = ({ children }) => {
  return children;
};
