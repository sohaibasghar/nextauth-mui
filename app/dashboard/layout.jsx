'use client';

import { Box } from '@mui/material';
import Header from '@/app/components/Header';

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Box component="main">
        {children}
      </Box>
    </Box>
  );
} 