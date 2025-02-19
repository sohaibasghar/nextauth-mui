'use client';

import { useSession } from 'next-auth/react';
import { Container, Typography, Box } from '@mui/material';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Container maxWidth="sm">
        <Box sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <Typography>Loading...</Typography>
        </Box>
      </Container>
    );
  }

  if (!session) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <Typography>Please sign in to view this page.</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Typography 
          variant="h3" 
          component="h1"
          sx={{ 
            fontWeight: 600,
            color: 'text.primary'
          }}
        >
          Welcome, {session?.user.firstName}!
        </Typography>
      </Box>
    </Container>
  );
}
