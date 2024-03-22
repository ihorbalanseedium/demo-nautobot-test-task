import { Box, Button, styled, TextField, Typography } from '@mui/material';

export const Root = styled(Box)`
  text-align: center;
  padding: 20px;
`;

export const Title = styled(Typography)`
  margin: 12px 0;
  color: white;
  text-align: left;
`;

export const ActionWrapper = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const SearchWrapper = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const TextInputStyled = styled(TextField)<{ error?: boolean }>`
  .MuiInputBase-root {
    background-color: #000;
    color: #c8c8c8;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .MuiInputBase-input {
    padding: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .Mui-focused {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
  }
`;

export const SearchButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
