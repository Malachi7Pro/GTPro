import React from 'react';
import { Typography, Container } from '@mui/material';

function Dashboard() {
  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1">
        Here you can track your project progress and manage services.
      </Typography>
    </Container>
  );
}

export default Dashboard;
