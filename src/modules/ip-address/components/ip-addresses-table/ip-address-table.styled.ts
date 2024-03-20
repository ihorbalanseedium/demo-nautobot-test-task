import { Box, Link, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const DataGridStyled = styled(DataGrid)`
  border: none;

  .MuiDataGrid-cell {
    background-color: #212121;
    color: rgb(200, 200, 200);
    border-color: #808080;
  }

  .MuiDataGrid-columnHeader {
    background-color: #2c353b;
  }

  .MuiDataGrid-columnHeaders {
    border-color: #808080;
  }

  .MuiToolbar-root {
    color: #fff;

    .MuiTablePagination-selectIcon {
      color: #fff;
    }
  }
`;

export const StatusBadge = styled(Box)<{ status: 'success' | 'null' }>`
  background-color: ${({ status }) =>
    status === 'success' ? '#4caf50' : '#000000'};
  color: #fff;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  font-weight: bold;
  color: #97bfff;
`;
