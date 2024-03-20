import { Alert, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const NoticeBlock = () => {
  return (
    <Alert icon={<ErrorOutlineIcon fontSize='inherit' />} severity='warning'>
      <Typography variant='body1' component='p'>
        For this task I didn&apos;t configured routing, so there is only one
        page.
      </Typography>
    </Alert>
  );
};
