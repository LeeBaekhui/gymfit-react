import { Box, Typography } from '@mui/material';

function ScheduleForm() {
  const handleOnSubmit = () => {
    // onSubmitProc function logic here
  };

  return (
    <Box 
      sx={{ 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: 'orange', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Typography variant="h1" component="div" sx={{ color: 'white' }}>
        레슨스케줄관리
      </Typography>
    </Box>
  );
}

export default ScheduleForm;
