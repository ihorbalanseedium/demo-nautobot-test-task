import { Alert, Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const NoticeBlock = () => {
  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <Alert icon={<ErrorOutlineIcon fontSize='inherit' />} severity='warning'>
        <Typography variant='body1' component='p'>
          For this task I didn&apos;t configured routing, so there is only one
          page. For some of the table elements I used simple selecting as from
          the data it was not clear what should be displayed in the table.
        </Typography>
      </Alert>
      <Alert icon={<ErrorOutlineIcon fontSize='inherit' />} severity='warning'>
        <Typography variant='body1' component='p'>
          There was some issues in creating new ip-address functionality, I
          tried to do it several times on the demo site, but did not managed to
          get it work there, so in adding modal only the ui without actual
          request.
        </Typography>
      </Alert>
    </Box>
  );
};
