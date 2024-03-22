import { Button, Grid, Modal, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateIpAddressForm,
  ipAddressSchema,
} from 'modules/ip-address/schemas/ip-address.schema';

import {
  AutocompleteStyled,
  FormWrapper,
  Label,
  MenuItemStyled,
  ModalRoot,
  SelectStyled,
  StyledPopper,
  SubmitWrapper,
  TextInputStyled,
  TitleWrapper,
} from './add-ip-address-modal.styled';
import { AddIpAddressModalProps } from './add-ip-address-modal.interface';
import { useCreateIpLocation } from '../../hooks';

export const AddIpAddressModal: FC<AddIpAddressModalProps> = ({
  open,
  handleClose,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateIpAddressForm>({
    resolver: zodResolver(ipAddressSchema),
  });
  const createMutation = useCreateIpLocation();

  const onSubmit = (data: CreateIpAddressForm) => {
    createMutation.mutate(data);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalRoot>
        <TitleWrapper>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Ip Address
          </Typography>
        </TitleWrapper>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} alignItems='center'>
              {/* Address */}
              <Grid item xs={2} justifyContent='flex-end' display='flex'>
                <Label>Address</Label>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  name='address'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextInputStyled
                      fullWidth
                      placeholder='None'
                      error={!!errors.address?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              {/* Namespace*/}
              <Grid item xs={2} justifyContent='flex-end' display='flex'>
                <Label>Namespace</Label>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  name='namespace'
                  control={control}
                  render={({ field }) => (
                    <AutocompleteStyled
                      options={[
                        'Cleanup Namespace (1)',
                        'Cleanup Namespace Nautobot Baseball Stadiums (1)',
                        'Global',
                      ]}
                      onChange={(_, changeValue) => {
                        field.onChange(changeValue);
                      }}
                      PopperComponent={StyledPopper}
                      isOptionEqualToValue={(option, valueItem) =>
                        option === valueItem
                      }
                      renderOption={(props, option) => (
                        <li {...props}>
                          <Typography color='white'>
                            {option as string}
                          </Typography>
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextInputStyled
                          placeholder='---------'
                          error={!!errors.namespace?.message}
                          {...params}
                        />
                      )}
                    />
                  )}
                />
              </Grid>

              {/* Type */}
              <Grid item xs={2} justifyContent='flex-end' display='flex'>
                <Label>Type</Label>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  name='type'
                  control={control}
                  render={({ field }) => (
                    <SelectStyled
                      fullWidth
                      defaultValue='host'
                      error={!!errors.namespace?.message}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            '& .MuiList-root': {
                              padding: 0,
                            },
                          },
                        },
                      }}
                      onChange={field.onChange}
                    >
                      <MenuItemStyled value='dhcp'>DHCP</MenuItemStyled>
                      <MenuItemStyled value='host'>Host</MenuItemStyled>
                      <MenuItemStyled value='slacc'>SLACC</MenuItemStyled>
                    </SelectStyled>
                  )}
                />
              </Grid>

              {/* Status */}
              <Grid item xs={2} justifyContent='flex-end' display='flex'>
                <Label>Status</Label>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  name='status'
                  control={control}
                  render={({ field }) => (
                    <AutocompleteStyled
                      onChange={(_, changeValue) => {
                        field.onChange(changeValue);
                      }}
                      options={['Active', 'Deprecated', 'NULL', 'Reserved']}
                      PopperComponent={StyledPopper}
                      renderOption={(props, option) => (
                        <li {...props}>
                          <Typography color='white'>
                            {option as string}
                          </Typography>
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextInputStyled
                          placeholder='---------'
                          error={!!errors.status?.message}
                          {...params}
                        />
                      )}
                    />
                  )}
                />
              </Grid>

              {/* Role */}
              <Grid item xs={2} justifyContent='flex-end' display='flex'>
                <Label>Role</Label>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  name='role'
                  control={control}
                  render={({ field }) => (
                    <AutocompleteStyled
                      onChange={(_, changeValue) => {
                        field.onChange(changeValue);
                      }}
                      options={[
                        'Anycat',
                        'CARP',
                        'GLBP',
                        'HSRP',
                        'Loopback',
                        'Secondary',
                        'ViP',
                        'VRRP',
                      ]}
                      PopperComponent={StyledPopper}
                      renderOption={(props, option) => (
                        <li {...props}>
                          <Typography color='white'>
                            {option as string}
                          </Typography>
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextInputStyled
                          placeholder='---------'
                          error={!!errors.role?.message}
                          {...params}
                        />
                      )}
                    />
                  )}
                />
              </Grid>

              {/* Dns */}
              <Grid item xs={2} justifyContent='flex-end' display='flex'>
                <Label>DNS Name</Label>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  name='dns'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextInputStyled
                      fullWidth
                      placeholder='DNS Name'
                      error={!!errors.dns?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              {/* Description */}
              <Grid item xs={2} justifyContent='flex-end' display='flex'>
                <Label>Description</Label>
              </Grid>
              <Grid item xs={10}>
                <Controller
                  name='description'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextInputStyled
                      fullWidth
                      placeholder='Description'
                      error={!!errors.description?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <SubmitWrapper>
              <Button type='submit'>Submit</Button>
            </SubmitWrapper>
          </form>
        </FormWrapper>
      </ModalRoot>
    </Modal>
  );
};
