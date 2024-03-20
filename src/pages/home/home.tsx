import React from 'react';
import { Button } from '@mui/material';
import { NoticeBlock } from 'modules/core/components';
import {
  IPAddressesTable,
  AddIpAddressModal,
} from 'modules/ip-address/components';
import { useModal } from 'modules/core/hooks/use-modal';

import { ActionWrapper, Root, Title } from './home.styled';

export const Home = () => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <Root>
      <NoticeBlock />
      <ActionWrapper>
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Add
        </Button>
      </ActionWrapper>
      <Title variant='h5'>IP Addresses</Title>
      <IPAddressesTable />
      <AddIpAddressModal open={open} handleClose={handleClose} />
    </Root>
  );
};
