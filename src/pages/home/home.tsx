import React from 'react';
import { NoticeBlock } from 'modules/core/components';
import { IPAddressesTable } from 'modules/ip-address/components';

import { Root, Title } from './home.styled';

export const Home = () => {
  return (
    <Root>
      <NoticeBlock />
      <Title variant='h5'>IP Addresses</Title>
      <IPAddressesTable />
    </Root>
  );
};
