import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import type { DefaultError } from '@tanstack/query-core';
import { IList } from 'modules/core/types';
import { IPAddress } from 'modules/ip-address/types';
import { mockData1 } from 'modules/ip-address/helpers/mocks';

export const IP_ADDRESSES_QUERY_KEY = 'ip-addresses';

export type ListIPAddressOptions = {
  q?: string;
  sort: string;
  limit?: number;
  offset?: number;
};

export const useIpAddresses = (
  options?: ListIPAddressOptions,
  queryOptions?: Omit<
    UseQueryOptions<IList<IPAddress>, AxiosError<DefaultError>>,
    'queryFn' | 'queryKey'
  >
) => {
  return useQuery<IList<IPAddress>, AxiosError<DefaultError>>({
    queryKey: [IP_ADDRESSES_QUERY_KEY, options],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      // TODO: Implement API call when issue with Api Token is resolved
      // const queryParams = queryString.stringify(
      //   {
      //     ...options,
      //   },
      //   {
      //     arrayFormat: 'bracket',
      //     encode: false,
      //   }
      // );
      //
      // const videos = await axios.get<IList<IPAddress>>(
      //   `/ipam/ip-addresses?${queryParams}`
      // );
      //
      // return videos.data;
      return new Promise<IList<IPAddress>>((resolve) => {
        const responseTime = Math.random() * 1000;

        setTimeout(() => {
          resolve(mockData1);
        }, responseTime);
      });
    },
    ...queryOptions,
  });
};
