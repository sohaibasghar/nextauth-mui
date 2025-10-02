'use client';

import { Box } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3,
            pt: { xs: 8, sm: 3 }, // Extra top padding on mobile for menu button
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
