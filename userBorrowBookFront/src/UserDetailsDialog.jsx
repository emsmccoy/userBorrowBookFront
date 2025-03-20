import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const UserDetailsDialog = ({ open, onClose, user }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Details</DialogTitle>
      <DialogContent>
        <Typography variant="body1">User App Name: {user.userAppName}</Typography>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Password: {user.password}</Typography>
        <Typography variant="body1">Age: {user.age}</Typography>
        <Typography variant="body1">Address: {user.address}</Typography>
        <Typography variant="body1">Archived: {user.archived ? 'Yes' : 'No'}</Typography>
        <Typography variant="body1">Date of Birth: {user.dob}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailsDialog;
