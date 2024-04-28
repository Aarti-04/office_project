// components/Login.js
"use client"
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Perform login logic
    // Redirect to dashboard after login
    router.push('/dashboard');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
