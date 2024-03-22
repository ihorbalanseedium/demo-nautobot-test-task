import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  InfiniteData,
  QueryKey,
} from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import type { DefaultError } from '@tanstack/query-core';
import { IList } from 'modules/core/types';
import { IPAddress } from 'modules/ip-address/types';
import queryString from 'query-string';

export const IP_ADDRESSES_QUERY_KEY = 'ip-addresses';

export type ListIPAddressOptions = {
  q?: string;
  sort?: string;
  limit: number;
  offset?: number;
};

export const useIpAddresses = (
  options: ListIPAddressOptions,
  queryOptions?: Omit<
    UseInfiniteQueryOptions<
      IList<IPAddress>,
      AxiosError<DefaultError>,
      InfiniteData<IList<IPAddress>>,
      IList<IPAddress>,
      QueryKey,
      object
    >,
    'queryFn' | 'queryKey'
  >
) => {
  return useInfiniteQuery<
    IList<IPAddress>,
    AxiosError<DefaultError>,
    InfiniteData<IList<IPAddress>>,
    QueryKey,
    object
  >({
    queryKey: [IP_ADDRESSES_QUERY_KEY, options],
    staleTime: 1000 * 60 * 5,
    initialPageParam: {
      limit: options.limit,
      offset: 0,
    },
    queryFn: async ({ pageParam }) => {
      const queryParams = queryString.stringify(
        {
          ...options,
          ...pageParam,
        },
        {
          arrayFormat: 'bracket',
          encode: false,
        }
      );

      const ipAddresses = await axios.get<IList<IPAddress>>(
        `/ipam/ip-addresses?${queryParams}`
      );

      return ipAddresses.data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const res = { ...queryString.parse(lastPage.next.split('?')[1]) };

        return { limit: Number(res?.limit), offset: Number(res?.offset) };
      }

      return {};
    },
    getPreviousPageParam: (prevPage) => {
      if (prevPage.previous) {
        const res = { ...queryString.parse(prevPage.previous.split('?')[1]) };

        return { limit: Number(res?.limit), offset: Number(res?.offset) };
      }

      return {};
    },

    ...queryOptions,
  });
};
