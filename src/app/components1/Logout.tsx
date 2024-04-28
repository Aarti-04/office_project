// components/Logout.js
'use client';
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout logic
    // Redirect to login page after logout
    router.push('/auth/login');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Logout
      </Typography>
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
