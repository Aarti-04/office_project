// components/DashboardLayout.js
import React from 'react';
// import AppBarComponent from './AppBarComponent';
import { Container, Typography } from '@mui/material';
import AppBarComponent from '../components/appbar1';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* <AppBarComponent /> */}
      <Container>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        {children}
      </Container>
    </div>
  );
};

export default DashboardLayout;
