import { useMutation } from '@tanstack/react-query';
import { mockData1 } from 'modules/ip-address/helpers/mocks';
import { CreateIpAddressForm } from '../schemas/ip-address.schema';

export const CREATE_IP_ADDRESS_QUERY_KEY = 'ip-address-create';

// type CreateIpAddressBody = {};

export const useCreateIpLocation = () => {
  return useMutation({
    mutationKey: [CREATE_IP_ADDRESS_QUERY_KEY],
    mutationFn: async (_: CreateIpAddressForm) => {
      // const ipAddress = await axios.post<IPAddress>('/videos', data);
      //
      // return ipAddress.data;

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockData1.results[0]);
        }, 1000);
      });
    },
  });
};
