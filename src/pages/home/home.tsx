import React, { useState } from 'react';
import { Button } from '@mui/material';
import { GridSearchIcon, GridAddIcon } from '@mui/x-data-grid';
import { NoticeBlock } from 'modules/core/components';
import {
  IPAddressesTable,
  AddIpAddressModal,
} from 'modules/ip-address/components';
import { useModal } from 'modules/core/hooks/use-modal';

import {
  ActionWrapper,
  Root,
  SearchButton,
  SearchWrapper,
  TextInputStyled,
  Title,
} from './home.styled';

export const Home = () => {
  const { open, handleOpen, handleClose } = useModal();
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleSearchPress = () => {
    setQuery(search);
  };

  return (
    <Root>
      <NoticeBlock />
      <SearchWrapper>
        <TextInputStyled
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton
          variant='contained'
          color='primary'
          onClick={handleSearchPress}
        >
          <GridSearchIcon />
        </SearchButton>
      </SearchWrapper>
      <ActionWrapper>
        <Button variant='contained' color='primary' onClick={handleOpen}>
          <GridAddIcon />
          Add
        </Button>
      </ActionWrapper>

      <Title variant='h5'>IP Addresses</Title>
      <IPAddressesTable q={query} />
      <AddIpAddressModal open={open} handleClose={handleClose} />
    </Root>
  );
};
