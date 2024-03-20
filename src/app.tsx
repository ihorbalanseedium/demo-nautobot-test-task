import React from 'react';
import { QueryProvider } from 'providers/query-provider';
import { AxiosProvider } from 'providers/axios-provider';
import { Home } from 'pages/home';

export const App = () => {
  return (
    <AxiosProvider>
      <QueryProvider>
        <Home />
      </QueryProvider>
    </AxiosProvider>
  );
};
