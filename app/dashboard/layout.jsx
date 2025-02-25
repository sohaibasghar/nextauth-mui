'use client';

import { Box } from '@mui/material';
import Header from '../components/Header';

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 64px)', // Subtract header height
          '@media (max-width: 600px)': {
            height: 'calc(100vh - 56px)', // Adjust for mobile header height
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
