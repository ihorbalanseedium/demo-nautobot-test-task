import {
  Autocomplete,
  Box,
  FormLabel,
  MenuItem,
  Popper,
  Select,
  styled,
  TextField,
} from '@mui/material';

export const TextInputStyled = styled(TextField)<{ error?: boolean }>`
  .MuiInputBase-root {
    background-color: #000;
    color: #c8c8c8;
    border-radius: 10px;
    ${({ error }) => error && ` border: 1px solid red;`}
  }

  .MuiInputBase-input {
    padding: 8px;
  }
`;

export const AutocompleteStyled = styled(Autocomplete)`
  .MuiInputBase-root {
    padding: 0 0 0 4px;
  }

  .MuiAutocomplete-paper {
    background-color: black;
  }
`;

export const SelectStyled = styled(Select)<{ error?: boolean }>`
  .MuiSelect-select {
    background-color: #000;
    color: #c8c8c8;
    border-radius: 10px;
    padding: 8px;

    ${({ error }) => error && ` border: 1px solid red;`}
  }
`;

export const Label = styled(FormLabel)`
  font-size: 14px;
  font-weight: 700;
  color: #c8c8c8;
  text-align: right;
`;

export const ModalRoot = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 300px;
  width: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  border-radius: 8px;
  background-color: #212121;
`;

export const TitleWrapper = styled(Box)`
  background-color: #2c353b;
  color: #c8c8c8;
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const StyledPopper = styled(Popper)`
  & .MuiPaper-root {
    background-color: black;
  }

  & .MuiAutocomplete-listbox {
    background-color: black;
  }

  & .MuiAutocomplete-option {
    background-color: black;
    font-size: 14px;
  }
`;

export const MenuItemStyled = styled(MenuItem)`
  font-size: 14px;

  background-color: black;
  color: white;

  &:hover {
    color: white;
    background-color: black;
  }

  &:focus {
    background-color: black;
    color: white;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const FormWrapper = styled(Box)`
  padding: 16px;
`;

export const SubmitWrapper = styled(Box)`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;
