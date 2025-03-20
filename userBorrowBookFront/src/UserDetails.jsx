import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';

const UserDetails = () => {
  const location = useLocation();
  const user = location.state?.user || {};

  return (
    <Paper>
      <Typography variant="h5">User Details</Typography>
      <Typography variant="body1">User App Name: {user.userAppName}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      <Typography variant="body1">Password: {user.password}</Typography>
      <Typography variant="body1">Age: {user.age}</Typography>
      <Typography variant="body1">Address: {user.address}</Typography>
      <Typography variant="body1">Archived: {user.archived ? 'Yes' : 'No'}</Typography>
      <Typography variant="body1">Date of Birth: {user.dob}</Typography>
    </Paper>
  );
};

export default UserDetails;
