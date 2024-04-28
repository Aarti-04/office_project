// pages/index.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleGoToLogin = () => {
    router.push('/auth/login');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard App
      </Typography>
      <Button variant="contained" onClick={handleGoToLogin}>
        Go to Login
      </Button>
    </div>
  );
};

export default Home;
