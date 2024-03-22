import {
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
} from '@mui/x-data-grid';
import { useEffect, useMemo, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useIpAddresses } from 'modules/ip-address/hooks';

import {
  DataGridStyled,
  LinkStyled,
  StatusBadge,
} from './ip-address-table.styled';

export const IPAddressesTable = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 100,
  });

  const { data, isLoading, fetchNextPage } = useIpAddresses({
    limit: paginationModel.pageSize,
  });

  const rows: GridRowsProp = useMemo(() => {
    return (
      data?.pages[paginationModel.page]?.results.map((ipAddress) => {
        return {
          id: ipAddress.id,
          checkbox: ipAddress.id,
          'ip-address': ipAddress.address || '—',
          namespace: ipAddress.parent?.id || '—',
          type: ipAddress.type || '—',
          status: ipAddress.status?.id || '—',
          role: ipAddress.role?.id || '—',
          tenant: ipAddress.tenant?.id || '—',
          assigned: ipAddress.nat_inside?.id || '—',
          'dns-name': ipAddress.dns_name || '—',
          description: ipAddress.description || '—',
        };
      }) ?? []
    );
  }, [data, paginationModel.page]);

  const numberOfPages = useMemo(() => {
    return data?.pages.length ?? 0;
  }, [data?.pages]);

  useEffect(() => {
    if (numberOfPages === paginationModel.page + 1) {
      fetchNextPage();
    }
  }, [numberOfPages, paginationModel.page]);

  const columns: GridColDef[] = [
    {
      field: 'checkbox',
      headerName: 'Checkbox',
      width: 50,
      disableColumnMenu: true,
      disableReorder: true,
      sortable: false,
      renderCell: () => <input type='checkbox' />,
      renderHeader: () => <input type='checkbox' />,
    },
    {
      field: 'ip-address',
      headerName: 'IP Address',
      minWidth: 150,
      renderCell: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.value}
        </LinkStyled>
      ),
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
    },
    {
      field: 'namespace',
      headerName: 'Namespace',
      minWidth: 150,
      renderCell: () => (
        <LinkStyled href='#' underline='hover'>
          Global
        </LinkStyled>
      ),
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
    },
    {
      field: 'type',
      headerName: 'Type',
      minWidth: 100,
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 100,
      renderCell: (item) => (
        <StatusBadge status={item.value === '—' ? 'null' : 'success'}>
          {item.value === '—' ? 'Null' : 'Active'}
        </StatusBadge>
      ),
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
    },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 100,
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
    },
    {
      field: 'tenant',
      headerName: 'Tenant',
      minWidth: 100,
      renderCell: () => (
        <LinkStyled href='#' underline='hover'>
          Nautobot Airports
        </LinkStyled>
      ),
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
    },
    {
      field: 'assigned',
      headerName: 'Assigned',
      minWidth: 100,
      renderCell: (item) =>
        item.value === '—' ? (
          <CloseIcon color='error' />
        ) : (
          <CheckIcon color='success' />
        ),
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
    },
    {
      field: 'dns-name',
      headerName: 'DNS Name',
      minWidth: 150,
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      minWidth: 150,
      renderHeader: (item) => (
        <LinkStyled href='#' underline='hover'>
          {item.colDef.headerName}
        </LinkStyled>
      ),
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      <DataGridStyled
        rows={rows}
        loading={isLoading}
        rowCount={data?.pages[0]?.count || 0}
        onPaginationModelChange={setPaginationModel}
        columns={columns}
        rowSelection={false}
        paginationMode={'server'}
      />
    </div>
  );
};
